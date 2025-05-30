import React from "react";
import FBI from "../../assets/images/footer-banner.png";
import Table from "../table/Table";

const FooterBanner = ({data}) => {
  return (
    <div className="footer-banner-wrapper pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={FBI} alt="footer-banner-img" loading="lazy" />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-start flex-column h-100 gap-2">
              <h1 className="py-3 footer-banner-content-title">
                Start Organizing Your{" "}
                <span className="d-md-block">Life Today</span>
              </h1>
              <p className="footer-banner-content-subtitle">
                Join us now and transform your productivity with our intuitive
                to-do list platform!
              </p>
              <div className="d-flex gap-3">
                <button className="custom-btn">Sign Up</button>
                <button className="custom-outline-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <Table todoData={data} />
      </div>
    </div>
  );
};

export default FooterBanner;
