import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.arbeitnow.com/api/job-board-api")
      .then((response) => {
        setJobs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>
              <strong>Company:</strong> {job.company_name}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <a href={job.url} target="_blank" rel="">
              View Job
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
