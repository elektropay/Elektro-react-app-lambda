import React from "react";
import Background from "../assets/everpay-intro.jpg";
import video from "../assets/everpay-intro.mp4";

import {
  Container,
  Row,
  Button
} from "reactstrap";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};


const Hero = () => (
   <div className="gradient-overlay-half-primary-video-v1 bg-img-hero" style={sectionStyle}>
   <div className="js-bg-video d-md-block position-absolute w-100 h-100">
   <video autoPlay loop playsInline muted src={video} />
   </div>
      <div className="position-relative z-index-2">
        <div className="d-md-flex">
         
         <Container className="d-md-flex align-items-md-center min-height-md-100vh text-center space-3 space-top-md-4 space-top-lg-3">
            <Row className="justify-content-md-center w-100">
              <div className="col-md-10">
            </div>
      <div className="mt-4 mb-7">
        <h1 className="display-3 text-white font-weight-normal">Fast Commerce 3.0</h1>
          <p className="lead text-white">Attract more customers and accept all your payment types.</p> 
          
          <div className="position-absolute right-0 bottom-0 left-0 mb-4">
          <Container className="text-center">
            <Button className="btn btn-lg btn-soft-white btn-wide text-left mr-1">
              <span className="media align-items-center">
                <span className="fab fa-apple fa-2x mr-3"></span>
                <span className="media-body">
                  <strong className="font-size-1">Get A Quote</strong>
                </span>
              </span>
            </Button>
            <Button className="btn btn-lg btn-soft-white btn-wide text-left ml-1">
              <span className="media align-items-center">
                <span className="fab fa-google-play fa-2x mr-3"></span>
                <span className="media-body">
                  <strong className="font-size-1">Get Started</strong>
                </span>
              </span>
            </Button>
    </Container>
   </div>
  </div>
          
          </Row> 
         </Container> 
    </div>
   </div>
  </div>
  );

export default Hero;