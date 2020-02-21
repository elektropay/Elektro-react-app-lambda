import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Fpsection1 from "../components/Fpsection1";
import Content from "../components/Content";

const Home = () => (
  <Fragment>
    <Hero />
    <Fpsection1 />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
