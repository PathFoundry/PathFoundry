// JobDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`
      )
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => console.error("Error fetching job details:", error));
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.job_name}</h1>
      <img src={job.company_logo_url} alt={`${job.company_name} logo`} />
      <p>{job.company_name}</p>
      <p>{job.company_location}</p>
      <p>{job.description}</p>
      <p>{job.salary}</p>
      <p>{job.type_contract}</p>
      <p>{job.remote ? "Remote" : "On-site"}</p>
      <p>{job.job_hours}</p>
      {/* Add any other details you want to display */}
    </div>
  );
}

export default JobDetails;
