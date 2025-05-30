import React from "react";
import C01 from "../../assets/images/C01.png";
import C02 from "../../assets/images/C02.png";
import C03 from "../../assets/images/C03.png";
import C04 from "../../assets/images/C04.png";
import C05 from "../../assets/images/C05.png";
import HeroCarousel from "../carousels/HeroCarousel";



const HeroBanner = ({openModal}) => {

 
  return (
    <div className="hero-banner-wrapper py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column gap-4">
          <div>
            <h1 className="mb-4 hero-banner-title">
              Simplify Your Life with Our
              <span className="d-md-block">Todo App</span>{" "}
            </h1>
            <p className="mb-4 hero-banner-subtitle">
              Stay organized and boost your productivity with our intuitive todo
              website.{" "}
              <span className="d-md-block">
                Experience a modern approach to task management that fits your
                lifestyle.
              </span>
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <button
                className="custom-btn rounded-5"
                onClick={openModal}
              >
                Get Started
              </button>
              <button className="custom-outline-btn rounded-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-2 mt-lg-3 g-4">
          <div className="col-md-8">
            <div className="hero-banner-content d-flex flex-column align-items-start p-4 p-md-5 ">
              <h1 className="hero-title">Organize.</h1>
              <h1 className="hero-title">Achieve.</h1>
              <h1 className="hero-title">Relax.</h1>
              <p className="hero-description">
                Turn clutter into clarity, chaos into control, and dreams into
                done. Bold visions into market success.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-start gap-3 mt-4">
                <button className="custom-btn-bg-white rounded-5">
                  Get Started Today
                </button>
                <button className="custom-btn-bg-transparent rounded-5">
                  Discover Features
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <HeroCarousel />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap gap-3 mt-4 px-0 mt-md-5 px-lg-5">
          {
            [C01, C02, C03, C04, C05].map((logo, index) => (
              <div key={index}>
                <img
                  src={logo}
                  alt={`Logo-${index + 1}`}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            ))
          }
          
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;
