import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="bg-primary u-devices-v2">
      <div className="container space-2 space-md-3 position-relative z-index-2">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto">
          <span className="btn btn-lg btn-icon btn-white rounded-circle mb-4">
          <span className="fas fa-paper-plane text-primary btn-icon__inner"></span>
          </span>
        <h2 className="h1 text-white">What can I do next?</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={6} className="mb-4">
              <h3 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h3>
              <p className="lead text-white-70 mb-0">{col.description}</p>
            </Col>
          ))}
           <div className="col-md-6">
           
           </div>
        </Row>
      </div>
      </div>
      </div>
    );
  }
}

export default Content;
