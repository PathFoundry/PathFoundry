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
        {jobs.map((job) => (
          <li key={job.id}>
            <div className="job-card-header">
              <div className="job-card-logo">
                <img src={job.company_logo_url} />
              </div>
              <div className="job-card-basic-info flex-1">
                <div className="job-card-title">
                  <h2 className="text-xl font-semibold">{job.job_name}</h2>
                  <p className="text-gray-600">{job.company_name}</p>
                  <p className="text-gray-500">{job.company_location}</p>
                </div>
                <div className="job-card-salary">
                  <p className="font-semibold text-gray-700">{job.salary}</p>
                </div>
              </div>
            </div>
            <div className="job-card-bottom mt-4">
              <div className="job-card-description">
                <p className="text-gray-700">{job.description}</p>
              </div>
              <div className="job-card-structured-data mt-2 flex space-x-4 text-gray-600 text-sm">
                <p>{job.type_contract}</p>
                {job.remote && <p>Remote</p>}
                <p>{job.job_hours}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
