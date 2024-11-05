import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/forms.css";

function EditJob() {
  // State variables
  const [job_name, setName] = useState("");
  const [company_name, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [company_location, setLocation] = useState("");
  const [company_location_maps, setMap] = useState("");
  const [company_logo_url, setLogo] = useState("");
  const [type_contract, setContractType] = useState("");
  const [job_hours, setJobHours] = useState("");
  const [remote, setRemote] = useState("");

  // Redirecting
  const navigate = useNavigate();
  const { jobId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`
      )
      .then((response) => {
        setName(response.data.job_name);
        setCompany(response.data.company_name);
        setDescription(response.data.description);
        setSalary(response.data.salary);
        setLocation(response.data.company_location);
        setMap(response.data.company_location_maps);
        setLogo(response.data.company_logo_url);
        setContractType(response.data.type_contract);
        setJobHours(response.data.job_hours);
        setRemote(response.data.remote);
      })
      .catch((error) =>
        console.log("Error getting job details from the API...", error)
      );
  }, [jobId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create job object
    const editedJob = {
      job_name,
      company_name,
      description,
      salary,
      company_location,
      company_location_maps,
      company_logo_url,
      type_contract,
      job_hours,
      remote,
    };

    // Update job in API
    axios
      .put(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`,
        editedJob
      )
      .then(() => {
        navigate(`/jobs/${jobId}`);
      })
      .catch((e) => console.log("Error editing job...", e));
  };

  return (
    <div className="list-container">
      <div
        id="forms-container-edit"
        className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Edit your job: {job_name}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium text-gray-700">
            Job Name:
            <input
              type="text"
              name="job_name"
              placeholder="Eg. Sales Assistant"
              value={job_name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Company Name:
            <input
              type="text"
              name="company_name"
              placeholder="Eg. Ironhack"
              value={company_name}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Description:
            <input
              type="text"
              name="description"
              placeholder="Job description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Salary:
            <input
              type="text"
              name="salary"
              placeholder="Eg. 40,000 $"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Address:
            <input
              type="text"
              name="company_location"
              placeholder="Add your address"
              value={company_location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Map URL:
            <input
              type="text"
              name="company_location_maps"
              placeholder="Map URL"
              value={company_location_maps}
              onChange={(e) => setMap(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Logo:
            <input
              type="text"
              name="company_logo_url"
              placeholder="Paste URL here"
              value={company_logo_url}
              onChange={(e) => setLogo(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Contract Type:
            <input
              type="text"
              name="type_contract"
              placeholder="Temporary or Permanent"
              value={type_contract}
              onChange={(e) => setContractType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
          <label className="block mb-2 font-medium text-gray-700">
            Job Hours:
            <input
              type="text"
              name="job_hours"
              placeholder="Full-time or Part-time"
              value={job_hours}
              onChange={(e) => setJobHours(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
          <fieldset className="mt-4">
            <legend className="mb-2 font-medium text-gray-700">Remote:</legend>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="remote"
                value="true"
                checked={remote === "true"}
                onChange={(e) => setRemote(e.target.value)}
                className="form-radio text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="remote"
                value="false"
                checked={remote === "false"}
                onChange={(e) => setRemote(e.target.value)}
                className="form-radio text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">No</span>
            </label>
          </fieldset>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditJob;
