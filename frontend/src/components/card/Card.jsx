import React from "react";

const Card = ({data}) => {
  const { icon, number, title, description } = data;
  return (
    <div className="card mt-2 mt-md-3 mt-lg-5">
      <div className="card-header border-bottom-0 d-flex justify-content-between align-items-center">
        <img src={icon} alt="card-icon" loading="lazy" />
        <h1 className="card-number">{number}</h1>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="divider-line"></div>
        <p className="card-description">
         {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
