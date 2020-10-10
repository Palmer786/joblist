import React from "react";
import Header from "./Header";
import { useLocation, useHistory } from "react-router-dom";

const JobDetails = () => {
  const linkLocation = useLocation();
  const history = useHistory();
  const {
    type,
    company,
    location,
    description,
    title,
    company_url,
    how_to_apply,
    company_logo
  } = linkLocation.state;
  return (
    <>
      <Header />
      <center>
        <button onClick={() => history.goBack()}>Go back</button>
      </center>
      <div className="main-page">
        <div className="title-box">
          <div className="location">
            <p>
              {type} / {location}
            </p>
          </div>
          <div className="title">
            <h2> {title} </h2>
          </div>
        </div>
        <div className="details">
          <div
            className="main-column"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="sidebar-column">
            <div className="company">
              <div className="company-details">
                <p>{company}</p>
                <hr />
                <img src={`${company_logo}`} alt="logo" />
                <a href={`${company_url}`}>Link</a>
              </div>
            </div>
            <div className="apply">
              <div className="apply-details">
                <p>How to apply</p>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
