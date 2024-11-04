import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/JobsList.css";

function JobsList(props) {
  useEffect(() => {
    axios
      .get(
        "https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api.json"
      )
      .then((response) => {
        const newArray = response.data;
        const newResponse = Object.keys(newArray).map((id) => ({
          id,
          ...newArray[id],
        }));
        const reverseNewResponse = newResponse.toReversed();
        props.setJobs(reverseNewResponse);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul className="jobs-list-container">
        {props.jobs.map((job) => (
          <li key={job.id}>
            <div className="job-card-header">
              <div className="job-card-logo">
                <img src={job.company_logo_url} />
              </div>
              <div className="job-card-basic-info">
                <div className="job-card-title">
                  <h2 id="job-name">{job.job_name}</h2>
                  <p id="company-name"> {job.company_name} </p>
                  <p id="company-location"> {job.company_location} </p>
                </div>
                <div className="job-card-salary">
                  <p id="job-salary">{job.salary} </p>
                </div>
              </div>
            </div>
            <div className="job-card-bottom">
              <div className="job-card-description">
                <p id="job-description">{job.description} </p>
              </div>
              <div className="job-card-structured-data">
                <p id="contract-type">{job.type_contract} </p>
                {job.remote === true && <p>Remote</p>}
                <p id="job-hours">{job.job_hours} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
