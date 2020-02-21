import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Hero from "../components/Hero";

import { translate, setLanguage, getLanguage } from 'react-multi-lang'

export class Developer extends Component { 
 constructor(props) {
    super(props);
    console.log(this.props);
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

                            <p> {this.props.t('developer.Already_in_the_sandbox')} <Link to="/developer-login">{this.props.t('developer.Sign_in')}</Link></p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="sandbox-right">
                          <div className="sandbox-signup-form">
                            <h1>{this.props.t('developer.Sign_up_for_the_sandbox')}</h1>

                            <form>
                              <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" name="" className="form-control" placeholder={this.props.t('developer.First_Name')}/>
                                </div>
                                  <div className="col-sm-6">
                                    <input type="text" name="" className="form-control" placeholder={this.props.t('developer.Last_Name')}/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                    <input type="text" name="" className="form-control" placeholder={this.props.t('developer.Company_Name')}/>
                                </div>                     
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                    <select className="form-control">
                                      <option value="af">Afghanistan</option>
                                        <option value="ax">Åland</option>
                                        <option value="al">Albania</option>
                                        <option value="dz">Algeria</option>
                                        <option value="as">American Samoa</option>
                                        <option value="ad">Andorra</option>
                                        <option value="ao">Angola</option>
                                        <option value="ai">Anguilla</option>
                                        <option value="aq">Antarctica</option>
                                        <option value="ag">Antigua And Barbuda</option>
                                        <option value="ar">Argentina</option>
                                        <option value="am">Armenia</option>
                                    </select>
                                </div>                     
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                    <input type="text" name="" className="form-control" placeholder={this.props.t('developer.Email_Address')}/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" value={this.props.t('developer.try_the_sendbox')} className="form-control btn btn-sm btn-primary transition-3d-hover"/>
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


export default translate(Developer);

