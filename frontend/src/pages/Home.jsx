import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HeroBanner from "../components/banners/HeroBanner";
import Features from "../components/feature/Features";
import Testimonials from "../components/testinomial/Testimonials";
import FooterBanner from "../components/banners/FooterBanner";
import Footer from "../components/footer/Footer";
import Heart from "../assets/images/heart.png";
import CustomModal from "../components/modal/CustomModal";
import Form from "../components/form/Form";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const handleFormSubmit = (data) => {
    setTodoData((prev) => [...prev, data]);
    setModal(false);
    setShowThankYou(true);
  };
  return (
    <div>
      <Navbar />
      <HeroBanner openModal={() => setModal(true)} />
      <Features />
      <Testimonials />
      <FooterBanner data={todoData} />
      <Footer />
      <CustomModal
        show={modal}
        onClose={() => {
          setModal(false);
        }}
        id="todoFormModal"
        title="Get Started Today!"
        subTitle="Fill in your details and take control of your tasks."
      >
        <Form onSubmit={handleFormSubmit} />
      </CustomModal>
      <CustomModal show={showThankYou} onClose={() => setShowThankYou(false)}>
        <div className="text-center py-4">
          <div className="d-flex justify-content-center">
            <img
              src={Heart}
              alt="Thank You"
              className="img-fluid mb-3"
              loading="lazy"
            />
          </div>
          <h4>Thank You For Connect with Us!</h4>
          <p>Our team will contacting with you soon</p>
          <button
            className="custom-btn w-50"
            onClick={() => setShowThankYou(false)}
          >
            Done
          </button>
        </div>
      </CustomModal>
    </div>
  );
};

export default Home;
