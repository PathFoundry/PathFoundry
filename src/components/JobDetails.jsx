import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import editIcon from "../assets/edit-icon.png";

function JobDetails({ setJobs }) {
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

  // Function to delete a job
  const handleDelete = async () => {
    try {
      // Call the delete API
      await axios.delete(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`
      );

      // Update state to remove the deleted job from the list
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      navigate("/");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="list-container">
      <div className="container mx-auto px-4 py-8">
        <div
          id="job-card-details"
          className="bg-white shadow-md rounded-lg p-4"
        >
          <div className="edit-back-buttons">
            <Link
              to="/"
              className="text-black-500 hover:text-blue-700 font-semibold px-6 py-0.5"
              id="back-button"
            >
              &lt; Back
            </Link>
            <img
              id="edit-logo"
              src={editIcon}
              onClick={() => navigate(`/jobs/${jobId}/edit`)}
            />
          </div>
          <div className="flex items-center mb-4 mt-4">
            <img
              id="company-logo"
              src={job.company_logo_url}
              alt={`${job.company_name} logo`}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {job.job_name}
              </h1>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-500">{job.company_location}</p>
              <p className="font-bold">{job.salary}</p>
            </div>
          </div>

          <p id="details-description" className="text-lg text-gray-700 mb-4">
            {job.description}
          </p>

          <div className="mb-4">
            <div
              id="contract-details"
              className="list-disc list-inside space-y-2"
            >
              <p>
                <span className="font-bold">Contract Type:</span>{" "}
                {job.type_contract}
              </p>
              <p>
                <span className="font-bold">Job Type:</span>{" "}
                {job.remote ? "Remote" : "On-site"}
              </p>
              <p>
                <span className="font-bold">Job Hours:</span> {job.job_hours}
              </p>
            </div>
          </div>
          <div className="my-6" />
          <div className="delete-button-container">
            <button
              onClick={handleDelete}
              className=" bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
