import React from "react";
import T01 from "../../assets/images/T02.png";

const TestinomialCarousel = () => {
  return (
    <div className="row testinomial-content-wrapper px-3">
      <div className="col-md-4 testimonial-left-content"></div>
      <div className="col-md-8">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center justify-content-center">
                <div className="d-flex flex-wrap p-3 p-md-4 gap-2 gap-md-4">
                  <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h2 className="corousel-left-content-title">
                      Using this website has made my tasks so much easier! I
                      can't imagine my day without it.
                    </h2>
                    <div className="d-flex justify-content-center align-items-center justify-content-lg-start gap-3">
                      <div className="corousel-left-content-icon"></div>
                      <div>
                        <h5 className="mb-1">Sherri Cronin</h5>
                        <p className="mb-0 text-muted">
                          Project Manager, TechCorp
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center">
                    <div className="corousel-right-img-wrapper">
                      <img
                        src={T01}
                        alt="Testimonial"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row align-items-center justify-content-center">
                <div className="d-flex flex-wrap p-4 gap-4">
                  <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h2 className="corousel-left-content-title">
                      Using this website has made my tasks so much easier! I
                      can't imagine my day without it.
                    </h2>
                    <div className="d-flex justify-content-center align-items-center justify-content-lg-start gap-3">
                      <div className="corousel-left-content-icon"></div>
                      <div>
                        <h5 className="mb-1">Sherri Cronin</h5>
                        <p className="mb-0 text-muted">
                          Project Manager, TechCorp
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center">
                    <div className="corousel-right-img-wrapper">
                      <img
                        src={T01}
                        alt="Testimonial"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-nav-buttons mt-1 mt-md-3">
            <button
              className="carousel-btn"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
              className="carousel-btn"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestinomialCarousel;
