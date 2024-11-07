import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "/src/css/forms.css";
import trashIcon from "src/assets/delete.png";
import noPhoto from "src/assets/no-photo.png";

function JobsList({ jobs, setJobs, filteredItems, handleDelete }) {
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
          const reverseNewResponse = newResponse.reverse();
          setJobs(reverseNewResponse);
        } else {
          setJobs([]);
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, [setJobs]);

  const displayJobs = filteredItems.length > 0 ? filteredItems : jobs;
  return (
    <div className="list-container">
      <div className="px-4 py-2 ml-20 custom-style">
        <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
        <ul className="space-y-4">
          {(displayJobs || []).map((job) => (
            <div className="card-wraper" key={job.id}>
              <NavLink to={`/jobs/${job.id}`}>
                <li
                  key={job.id}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row md:mt-4 max-380:pr-6"
                >
                  <div className="flex-shrink-0">
                    {job.company_logo_url ? (
                      <img
                        src={job.company_logo_url}
                        alt={`${job.company_name} logo`}
                        className="w-20 h-20 rounded-md border border-blue-500"
                      />
                    ) : (
                      <img
                        src={noPhoto}
                        alt={`${job.company_name} logo`}
                        className="w-20 h-20 rounded-md border border-blue-500"
                      />
                    )}
                  </div>
                  <div className="flex-grow md:ml-4 mt-4 md:mt-0">
                    <div className="card-head-container">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {job.job_name}
                      </h2>

                      <img
                        src={trashIcon}
                        className="delete-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleDelete(job.id);
                        }}
                      />
                    </div>
                    <p className="text-gray-600">{job.company_name}</p>
                    <p className="text-gray-500">{job.company_location}</p>
                    <p className="mt-2 text-lg font-bold text-gray-700">
                      {job.salary}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-4 text-gray-500">
                        <span>{job.type_contract}</span>
                        {job.remote && (
                          <span className="text-green-500">Remote</span>
                        )}
                        <span>{job.job_hours}</span>
                      </div>
                      <Link
                        to={`/jobs/${job.id}`}
                        className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
                      >
                        View More Details
                      </Link>
                    </div>
                  </div>
                </li>
              </NavLink>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobsList;
