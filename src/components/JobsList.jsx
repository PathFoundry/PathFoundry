import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function JobsList(props) {
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

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      <ul className="space-y-4">
        {(props.jobs || []).map((job) => (
          <li
            key={job.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row"
          >
            <div className="flex-shrink-0">
              <img
                src={job.company_logo_url}
                alt={`${job.company_name} logo`}
                className="w-20 h-20 rounded-md border border-blue-500"
              />
            </div>
            <div className="flex-grow md:ml-4 mt-4 md:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">
                {job.job_name}
              </h2>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-500">{job.company_location}</p>
              <p className="mt-2 text-lg font-bold text-gray-700">
                {job.salary}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex space-x-4 text-gray-500">
                  <span>{job.type_contract}</span>
                  {job.remote && <span className="text-green-500">Remote</span>}
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
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
