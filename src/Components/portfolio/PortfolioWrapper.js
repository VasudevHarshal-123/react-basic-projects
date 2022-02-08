import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import { withRouter } from "react-router-dom";

function PortfolioWrapper() {
  return (<div>
    <Header />
    <Body />
    <Footer />
  </div>)
}

export default withRouter(PortfolioWrapper);
