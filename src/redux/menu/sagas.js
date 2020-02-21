import { all, put, call } from 'redux-saga/effects'
import { getCustomerMenuData, getBusinessMenuData } from 'services/menu'

export function* GET_DATA() {
  const customerMenuData = yield call(getCustomerMenuData)
  const businessMenuData = yield call(getBusinessMenuData)
  // console.log('businessMenuData', businessMenuData)
  yield put({
    type: 'menu/SET_STATE',
    payload: {
      customerMenuData,
      businessMenuData,
    },
  })
}

export default function* rootSaga() {
  yield all([
    GET_DATA(), // run once on app load to fetch menu data
  ])
}
