import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/JobsList.css";

function JobsList() {
  const [jobs, setJobs] = useState([]);

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
        setJobs(reverseNewResponse);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Job Listings</h1>
      <ul className="jobs-list-container space-y-6">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="border border-blue-500 rounded-lg p-6 bg-white shadow-md"
          >
            <div className="job-card-header flex items-center">
              <div className="job-card-logo w-16 h-16 mr-4">
                <img
                  src={job.company_logo_url}
                  alt="Company Logo"
                  className="w-full h-full object-cover rounded"
                />
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
