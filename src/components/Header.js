import React, { useState ,useEffect} from "react";
import { Link,NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { translate, setLanguage, getLanguage } from 'react-multi-lang'

 const Header = (props) => {

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>

      logout({
      returnTo: window.location.origin
    });

    const changeLang  = (lang) => {
       setLanguage(lang)
     }

       return (
           <React.Fragment>

			   <header id="header" className="u-header u-header--abs-top-md u-header--bg-transparent u-header--show-hide-md"
			          data-header-fix-moment="500"
			          data-header-fix-effect="slide">

			    <div id="searchPushTop" className="u-search-push-top">
			      <div className="container position-relative">
			        <div className="u-search-push-top__content">

			          <button type="button" className="close u-search-push-top__close-btn"
			                  aria-haspopup="true"
			                  aria-expanded="false"
			                  aria-controls="searchPushTop"
			                  data-unfold-type="jquery-slide"
			                  data-unfold-target="#searchPushTop">
			            <span aria-hidden="true">&times;</span>
			          </button>

			          <form className="js-focus-state input-group input-group-lg">
			            <input type="search" className="form-control" placeholder="Search Front" aria-label="Search Front"/>
			            <div className="input-group-append">
			              <button type="button" className="btn btn-primary">{props.t('home.Search')}</button>
			            </div>
			          </form>

			          <div className="row d-none d-md-flex mt-7">
			            <div className="col-sm-6">
			              <strong className="d-block mb-2">{props.t('home.Quick_Links')}</strong>

			              <div className="row">

			                <div className="col-6">
			                  <div className="list-group list-group-transparent list-group-flush list-group-borderless">
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                     {props.t('home.Search_Results_List')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Search_Results_Grid')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                     {props.t('home.About')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Services')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Invoice')}
			                    </a>
			                  </div>
			                </div>

			                <div className="col-6">
			                  <div className="list-group list-group-transparent list-group-flush list-group-borderless">
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Profile')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.User_Contacts')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Reviews')}
			                    </a>
			                    <a className="list-group-item list-group-item-action" href="#">
			                      <span className="fas fa-angle-right list-group-icon"></span>
			                      {props.t('home.Settings')}
			                    </a>
			                  </div>
			                </div>
			              </div>
			            </div>

			            <div className="col-sm-6">

			              <div className="rounded u-search-push-top__banner">
			                <div className="d-flex align-items-center">
			                  <div className="u-search-push-top__banner-container">
			                    <img className="img-fluid u-search-push-top__banner-img" src="../assets/img/mockups/img3.png" alt="Image Description"/>
			                    <img className="img-fluid u-search-push-top__banner-img" src="../assets/img/mockups/img2.png" alt="Image Description"/>
			                  </div>

			                  <div>
			                    <div className="mb-4">
			                      <strong className="d-block mb-2">{props.t('home.Featured_Item')}</strong>
			                      <p>{props.t('home.Create_astonishing_web_sites_and_pages')}</p>
			                    </div>
			                    <a className="btn btn-xs btn-soft-success transition-3d-hover" href="index.html">{props.t('home.Apply_Now')} <span className="fas fa-angle-right ml-2"></span></a>
			                  </div>
			                </div>
			              </div>

			            </div>
			          </div>

			        </div>
			      </div>
			    </div>

			    <div className="u-header__section">

			      <div id="logoAndNav" className="container">

			        <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">

			          <Link className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" to="/" aria-label="Front">
			            <img className="logo12" src="../assets/img/logo/mainlogo.png" alt=""/>
			            <img className="logo13" src="../assets/img/logo/everpaylogo-261x67_jrwizm.png" alt=""/>
			          </Link>

			          <button type="button" className="navbar-toggler btn u-hamburger"
			                  aria-label="Toggle navigation"
			                  aria-expanded="false"
			                  aria-controls="navBar"
			                  data-toggle="collapse"
			                  data-target="#navBar">
			            <span id="hamburgerTrigger" className="u-hamburger__box">
			              <span className="u-hamburger__inner"></span>
			            </span>
			          </button>

			          <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
			            <ul className="navbar-nav u-header__navbar-nav">

			              <li className="nav-item hs-has-mega-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut"
			                  data-position="left">
			                <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">{props.t('home.What_We_Do')}</a>


			                <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="homeMegaMenu">
			                  <div className=" no-gutters">
			                      <div className="row u-header__mega-menu-wrapper">
			                        <div className="col-sm-4 mb-3 mb-sm-0">
			                          <span className="u-header__sub-menu-title">{props.t('home.Maximize_Revenue')}</span>
			                          <ul className="u-header__sub-menu-nav-group mb-3">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Card_Processing')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.ACH_E_Check')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Everpay_Mobile')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Bitcoin')}</a></li>
			                            <li><Link className="nav-link u-header__sub-menu-nav-link" to="/plan">{props.t('home.Pricing')}</Link></li>

			                          </ul>

			                        </div>

			                        <div className="col-sm-4 mb-3 mb-sm-0">

			                          <span className="u-header__sub-menu-title">{props.t('home.Expand_Your_Reach')}</span>
			                          <ul className="u-header__sub-menu-nav-group mb-3">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.E_Marketplace')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Elektropay')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Everpay_Capital')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Mobile_Marketing')}</a></li>
			                          </ul>

			                        </div>

			                        <div className="col-sm-4 mb-3 mb-sm-0">

			                          <span className="u-header__sub-menu-title">{props.t('home.Boost_Productivity')}</span>
			                          <ul className="u-header__sub-menu-nav-group">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Elektropay')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.POS_Terminals')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.E_Invoicing')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Gift_&_Loyalty_Program')}</a></li>
			                          </ul>
			                        </div>

			                        <div className="col-sm-4 mb-3 mb-sm-0">
			                          <span className="u-header__sub-menu-title">{props.t('home.Ensure_Security')}</span>
			                          <ul className="u-header__sub-menu-nav-group mb-3">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.PCI_compliance')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Fraud_Prevention')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Data_Encryption')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.ChargeBack_Reduction')}</a></li>
			                          </ul>

			                        </div>

			                        <div className="col-sm-4 mb-3 mb-sm-0">

			                          <span className="u-header__sub-menu-title">{props.t('home.Data_Visualization')}</span>
			                          <ul className="u-header__sub-menu-nav-group mb-3">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Detailed_Analytics')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Ask_A_Question')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Blog')}</a></li>
			                          </ul>

			                        </div>

			                        <div className="col-sm-4 mb-3 mb-sm-0">

			                          <span className="u-header__sub-menu-title">{props.t('home.Payments_Expertise')}</span>
			                          <ul className="u-header__sub-menu-nav-group">
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Payments')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Marketing')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.App_Development')}</a></li>
			                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{props.t('home.Cloud_Hosting')}</a></li>
			                          </ul>
			                        </div>
			                      </div>
			                  </div>
			                </div>

			              </li>



			              <li className="nav-item hs-has-sub-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut">
			                <a id="blogMegaMenu" className="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">{props.t('home.Shop')}</a>
			              </li>

			              <li className="nav-item hs-has-sub-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut">
			                <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">{props.t('home.Company')}</a>


			                <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{"min-width": "230px"}}>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogclassNameic" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogclassNameic">{props.t('home.About')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogGrid" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">{props.t('home.Contact')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogList" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">{props.t('home.Careers')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogCard">{props.t('home.Our_Blog')}</a>
			                  </li>

			                </ul>

			              </li>

			              <li className="nav-item hs-has-sub-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut">
			                <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">{props.t('home.Resources')}</a>


			                <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{"min-width": "230px"}}>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogclassNameic" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogclassNameic">{props.t('home.About')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogGrid" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">{props.t('home.Contact')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogList" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">{props.t('home.Careers')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogCard">{props.t('home.Our_Blog')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <Link id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" to="/developer" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogCard">{props.t('developer.developer_page')}</Link>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <Link id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" to="/services" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogCard">{props.t('service.Encryption_services')}</Link>
			                  </li>


			                </ul>

			              </li>
			              {!isAuthenticated && (
			               <li className="nav-item u-header__nav-last-item">
			                <a id="qsLoginBtn"  className="btn btn-sm btn-primary transition-3d-hover" href="javascript:;" onClick={() => loginWithRedirect({})}>
			                    {props.t('home.Login')}
			                </a>

			              </li>
			             )}

			              {isAuthenticated && (
			              	 <li className="nav-item hs-has-sub-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut">
			                <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">
			                <span class="user-image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" /></span></a>

			                <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{"min-width": "230px"}}>

			                  <li className="hs-has-sub-menu">
			                    <Link id="navLinkBlogclassNameic" className="nav-link u-header__sub-menu-nav-link" to="/profile" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogclassNameic">{props.t('home.Profile')}</Link>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a id="navLinkBlogclassNameic" className="nav-link u-header__sub-menu-nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogclassNameic"  onClick={() => logoutWithRedirect()}>{props.t('home.Logout')}</a>
			                  </li>

			                </ul>

			              </li>
			              	)}

			              <li className="nav-item u-header__nav-last-item">
			                <a className="btn btn-sm btn-primary transition-3d-hover" href="#" target="_blank">
			                   {props.t('home.Get_Started')}
			                </a>
			              </li>


			              <li className="nav-item hs-has-sub-menu u-header__nav-item"
			                  data-event="hover"
			                  data-animation-in="slideInUp"
			                  data-animation-out="fadeOut">
			                <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu"> {getLanguage()=='en'?"English":"French"} </a>


			                <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{"min-width": "230px"}}>

			                  <li className="hs-has-sub-menu">
			                    <a className="nav-link u-header__sub-menu-nav-link" href="#" onClick={() => changeLang('en')}> {props.t('home.English')}</a>
			                  </li>

			                  <li className="hs-has-sub-menu">
			                    <a className="nav-link u-header__sub-menu-nav-link" href="#" onClick={() => changeLang('fr')}>{props.t('home.French')}</a>
			                  </li>

			                </ul>

			              </li>

			            </ul>
			          </div>
			        </nav>

			      </div>
			    </div>
			  </header>
           </React.Fragment>
)

}


export default translate(Header);
