import React from "react";
import C01 from "../../assets/images/hero-banner.png";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-container">
      <div
        id="heroCarousel"
        className="carousel carousel-fade overflow-hidden position-relative"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={C01}
              className="d-block w-100"
              alt="Slide 1"
              loading="lazy"
            />
            <div className="carousel-footer d-flex justify-content-between align-items-center position-absolute bottom-0 w-100 px-4 pb-3">
              <div className="text-white">
                <h5 className="mb-1">Freddie Halvorson</h5>
                <p className="mb-0 small">Chief Productivity Enthusiast</p>
              </div>
              <button className="video-play-btn">
                <i className="ri-play-circle-fill"></i>
              </button>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="https://img.freepik.com/free-photo/portrait-confident-businessman_107420-74362.jpg?ga=GA1.1.863242252.1743798893&semt=ais_hybrid&w=740"
              className="d-block"
              alt="Slide 2"
              loading="lazy"
            />
            <div className="carousel-footer d-flex justify-content-between align-items-center position-absolute bottom-0 w-100 px-4 pb-3">
              <div className="text-white">
                <h5 className="mb-1">Freddie Halvorson</h5>
                <p className="mb-0 small">Chief Productivity Enthusiast</p>
              </div>
              <button className="video-play-btn">
                <i className="ri-play-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-overlay d-flex flex-column justify-content-between h-100 w-100 px-4 py-3">
          <div className="d-flex justify-content-between align-items-start">
            <h2 className="carousel-title">
              <div className="opacity-custom">Your Task.</div>
              <span className="d-block">Your Tool.</span>
            </h2>

            <div className="carousel-indicators carousel-indicators-custom">
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="1"
              ></button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <i className="ri-arrow-left-s-line fs-3"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <i className="ri-arrow-right-s-line fs-3"></i>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
