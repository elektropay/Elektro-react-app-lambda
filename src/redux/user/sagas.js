import { all, call, put, takeEvery } from 'redux-saga/effects'
import { notification } from 'antd'
import * as EmailValidator from 'email-validator'
import { history } from 'index'
import { currentAccount, login, logout, register, resetPassword } from 'services/user'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(login, email, password)
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  if (success) {
    yield history.push('/')
    notification.success({
      message: 'Logged In',
      description: 'You have successfully logged in to Air UI React Admin Template!',
    })
  }
}

export function* REGISTER({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(register, payload)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
  if (success) {
    yield history.push('/user/login')
    notification.success({
      message: 'Registerd',
      description: 'You have successfully registered in to Air UI React Admin Template!',
    })
  }
}

export function* RESET_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  if (EmailValidator.validate(payload.email)) {
    const success = yield call(resetPassword, payload)
    notification.success({
      message: 'Reset Password',
      description: success,
    })
  } else {
    notification.warning({
      message: 'Reset Password',
      description: 'Please provide valid email!',
    })
  }

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const response = yield call(currentAccount)
  if (response) {
    const { aud: id, email, nickname: name, picture: avatar, roles } = response
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        name,
        email,
        avatar,
        roles,
        authorized: true,
      },
    })
  }

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      roles: [],
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.RESET_PASSWORD, RESET_PASSWORD),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
