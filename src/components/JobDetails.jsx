// JobDetails.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

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

  if (!job) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src={job.company_logo_url}
            alt={`${job.company_name} logo`}
            className="w-16 h-16 rounded-md border border-blue-500"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">{job.job_name}</h1>
            <p className="text-gray-600">{job.company_name}</p>
            <p className="text-gray-500">{job.company_location}</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-4">{job.description}</p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Job Details</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Salary:</span> {job.salary}
            </li>
            <li>
              <span className="font-bold">Contract Type:</span>{" "}
              {job.type_contract}
            </li>
            <li>
              <span className="font-bold">Job Type:</span>{" "}
              {job.remote ? "Remote" : "On-site"}
            </li>
            <li>
              <span className="font-bold">Job Hours:</span> {job.job_hours}
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate(`/jobs/${jobId}/edit`)} // Navigate to EditJob page
          className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Edit
        </button>
        <div className="my-6" />
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Back to Job Listings
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
