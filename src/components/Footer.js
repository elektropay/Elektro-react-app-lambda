import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { translate, setLanguage, getLanguage } from 'react-multi-lang'


 const Footer = (props) => {

        return (
           <React.Fragment>

                 <footer>

			    <div className="border-bottom">
			      <div className="container space-2">
			        <div className="row justify-content-md-between">
			          <div className="col-md-4">
			            <h4 className="h6 font-weight-semi-bold">{props.t('home.About_Us')}</h4>
			            <p>{props.t('home.Everpay_Corporation_helps_companies_to_easily_conduct_commerce_globally_with_our_simplified_payment_solutions')}</p>
			          </div>

			          <div className="col-md-2">
			            <h4 className="h6 font-weight-semi-bold">{props.t('home.Why_us')}</h4>

			            <ul className="list-group list-group-flush list-group-borderless mb-0">
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Industries_Served')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Services_&_Solutions')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Compliance_&_Security')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Transparent_Pricing')}</a></li>
			            </ul>

			          </div>

			          <div className="col-md-2">
			            <h4 className="h6 font-weight-semi-bold">{props.t('home.What_we_do')}</h4>

			            <ul className="list-group list-group-flush list-group-borderless mb-0">
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Card_Processing')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Direct_Debits')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Coin_Payments')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Subscription_Commerce')}</a></li>
			            </ul>

			          </div>

			          <div className="col-md-2">
			            <h4 className="h6 font-weight-semi-bold">{props.t('home.the_company')}</h4>

			            <ul className="list-group list-group-flush list-group-borderless mb-0">
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.About_Us2')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Contact_us')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Jobs')} <span>{props.t('home.We_re_hiring')}</span></a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Become_a_partner')}</a></li>
			            </ul>
			          </div>

			          <div className="col-md-2">
			            <h4 className="h6 font-weight-semi-bold">{props.t('home.Resources')}</h4>
			             <ul className="list-group list-group-flush list-group-borderless mb-0">
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Shop')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Open_Docs')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Developers')}</a></li>
			              <li><a className="list-group-item list-group-item-action" href="#">{props.t('home.Help_&_Support')}</a></li>
			            </ul>
			          </div>


			        </div>
			      </div>
			    </div>

			    <div className="container text-center space-1">
			      <p className="small text-muted">© {props.t('home.copyright')}</p>
			    </div>

			  </footer>
           </React.Fragment>

        )

}

export default translate(Footer);
