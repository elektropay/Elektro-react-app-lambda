import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Hero from "../components/Hero";
import { translate, setLanguage, getLanguage } from 'react-multi-lang'

export class Developer_login extends Component { 
 constructor(props) {
    super(props);
  }
   render() {
    return (
           <React.Fragment>
                <Hero/>
                <div className="Innerpage">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="sandbox-left">
                          <div className="tests">
                             {this.props.t('developer.headeing')}
                          </div>

                          <div className="tests-desc">
                            <p>{this.props.t('developer.description')}</p>

                            <p>{this.props.t('developer.Not_Registered')} <Link to="/developer">{this.props.t('developer.Sign_up')}</Link></p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="sandbox-right">
                          <div className="sandbox-signup-form">
                            <h1>{this.props.t('developer.Log_into_Sandbox')}</h1>

                            <form>
                              <div className="row">
                                <div className="col-sm-12">
                                    <input type="text" name="Username" className="form-control" placeholder={this.props.t('developer.username')}/>
                                </div>                     
                              </div>
                            
                             <div className="row">
                                <div className="col-sm-12">
                                    <input type="password" name="password" className="form-control" placeholder={this.props.t('developer.password')}/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" value={this.props.t('home.Login')} className="form-control btn btn-sm btn-primary transition-3d-hover"/>
                                </div>
                              </div>
                             </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           </React.Fragment>   
       )
    }
}

export default translate(Developer_login);

