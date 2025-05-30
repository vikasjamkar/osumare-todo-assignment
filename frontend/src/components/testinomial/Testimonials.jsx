import React from "react";
import TestinomialCarousel from "../carousels/TestinomialCarousel";

const Testimonials = () => {
  return (
   <div className="testinomial-wrapper pt-5">
     <div className="container">
      <h2 className="testinomial-title pb-2 text-center text-lg-start">Customer Testimonials</h2>
      <p className="testinomial-subtitle pb-2 text-center text-lg-start">This tool has transformed my productivity and organization!</p>
       <TestinomialCarousel/>
    </div>
   </div>
  );
};

export default Testimonials;
