import React, { useEffect, useState } from "react"; // Import useState
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/JobsList.css";

function JobsList(props) {
  const [selectedJobId, setSelectedJobId] = useState(null); // Step 1: State for selected job

  useEffect(() => {
    axios
      .get(
        "https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api.json"
      )
      .then((response) => {
        if (response.data) {
          const newArray = response.data;
          const newResponse = Object.keys(newArray).map((id) => ({
            id,
            ...newArray[id],
          }));
          const reverseNewResponse = newResponse.reverse(); // changed to reverse for compatibility
          props.setJobs(reverseNewResponse);
        } else {
          props.setJobs([]); // Set an empty array if no data is returned
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  // Function to toggle job details
  const toggleJobDetails = (jobId) => {
    setSelectedJobId((prevId) => (prevId === jobId ? null : jobId));
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <ul className="jobs-list-container">
        {(props.jobs || []).map((job) => (
          <li key={job.id} className="job-card">
            <div className="job-card-header">
              <div className="job-card-logo">
                <img
                  src={job.company_logo_url}
                  alt={`${job.company_name} logo`}
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
              <Link to={`/jobs/${job.id}`} className="view-more-button">
                View More Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
