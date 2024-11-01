import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.salary}</h2>
            <p>
              <strong>Company:</strong> {job.description}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
