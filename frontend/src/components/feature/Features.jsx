import React from "react";
import F01 from "../../assets/images/F01.png";
import F02 from "../../assets/images/F02.png";
import F03 from "../../assets/images/F03.png";
import F04 from "../../assets/images/F04.png";
import Card from "../card/Card";

const Features = () => {
  const features = [
    {
      icon: F01,
      number: "01",
      title: "User-Friendly Interface",
      description:
        "Our platform offers seamless task management to boost your efficiency.",
    },
    {
      icon: F02,
      number: "02",
      title: "Collaborate & Share Effortlessly",
      description:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      icon: F03,
      number: "03",
      title: "Effortless Collaboration",
      description:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      icon: F04,
      number: "04",
      title: " Seamless Access Workflows",
      description: "Stay connected and manage your tasks on the go with ease.",
    },
  ];

  return (
   <div className="features-wrapper pt-5">
     <div className="container">
      <h1 className="features-title text-center ">
        Transform Your Productivity with Our
        <span className="d-md-block">Innovative To-Do List Features</span>
      </h1>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-4">
        {features.map((feature, index) => (
          <Card key={index} data={feature} />
        ))}
      </div>
    </div>
   </div>
  );
};

export default Features;
