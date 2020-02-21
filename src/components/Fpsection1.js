import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import bgimage from "../assets/img/450x450/img1.jpg";
import bgimage1 from "../assets/img/1920x1080/img2.jpg";
import bgimage2 from "../assets/img/1920x1920/img1.jpg";
import bgimage3 from "../assets/img/1920x1080/img3.jpg";
import bgimage4 from "../assets/img/300x180/img1.jpg";
import bgimagesvg from "../assets/svg/components/soft-triangle-shape.svg";

import fpsection1Data from "../utils/fpsection1Data";

class frontPageSection1 extends Component {
  render() {
    return (
     <div className="overflow-hidden">
      <div className="container space-2 space-md-3">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-7 mb-lg-0">
            <div className="pr-md-4">
              <div className="mb-7">
       <h2 className="text-primary font-weight-normal">Payments Built For You</h2>
        <p className="mb-0">Enhance your business with easy-to-use payment customization features.</p>
      </div>
        <Row className="d-flex justify-content-between">
          {fpsection1Data.map((col, i) => (
            <Col key={i} md={6} className="mb-4">
              <h6 className="mb-3">
              <i className="fas fa-external-link-alt mr-2"></i>
              </h6>
              <p className="mb-2">{col.description}</p>
              <a className="btn btn-sm btn-primary btn-wide transition-3d-hover" href="{col.link}">Learn More <span className="fas fa-angle-right ml-2"></span></a>
            </Col>
             ))}
            <Col md={6} className="position-relative">

             <div className="row mx-gutters-2">
              <div className="col-5 align-self-end px-2 mb-3">
                <a  className="js-fancybox u-media-viewer" href="#"
                   data-src="{bgimage}"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Simple Payment Solutions"
                   data-speed="700">
                  <img className="img-fluid rounded" src="{bgimage}" alt="" />

                  <span className="u-media-viewer__container">
                    <span className="u-media-viewer__icon">
                      <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
              </div>

              <div className="col-7 px-2 mb-3">
                <a className="js-fancybox u-media-viewer" href="#"
                   data-src="{bgimage1}"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Accept all payment types"
                   data-speed="700">
                  <img class="img-fluid rounded" src="{bgimage}" alt="" />

                  <span className="u-media-viewer__container">
                    <span className="u-media-viewer__icon">
                      <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
              </div>

              <div className="col-5 offset-1 px-2 mb-3">
                <a className="js-fancybox u-media-viewer" href="#"
                   data-src="{bgimage2}"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="We Got All The POS devices"
                   data-speed="700">
                  <img className="img-fluid rounded" src="{bgimage}" alt="" />

                  <span className="u-media-viewer__container">
                    <span className="u-media-viewer__icon">
                      <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
              </div>

              <div className="col-5 px-2 mb-3">
                <a className="js-fancybox u-media-viewer" href="#"
                   data-src="{bgimage3}"
                   data-fancybox="lightbox-gallery-hidden"
                   data-caption="Expand globally easliy"
                   data-speed="700">
                  <img className="img-fluid rounded" src="{bgimage4}" />

                  <span className="u-media-viewer__container">
                    <span className="u-media-viewer__icon">
                      <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                    </span>
                  </span>
                </a>
              </div>
            </div>


            <div id="SvgbgShapeid1" className="svg-preloader w-100 content-centered-y z-index-n1">
              <figure className="ie-soft-triangle-shape">
                <img className="js-svg-injector" src="{bgimagesvg}" alt=""
                     data-parent="#SvgbgShapeid1"
                     />
              </figure>
            </div>

          </Col>

        </Row>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default frontPageSection1;
