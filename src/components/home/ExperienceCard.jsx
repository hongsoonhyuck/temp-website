import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        {/*
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
        */}
        <h4>{data.role}</h4>
        <p className="lead">{data.date}</p>
      </div>
    </Col>
  );
}

export default ExperienceCard;