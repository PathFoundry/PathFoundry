import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJobForm() {
  // State hooks
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
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For loading state

  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!job_name || !company_name || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    const newJob = {
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

    setLoading(true);
    setError(""); // Reset error message before the API call

    // Adding to API
    axios
      .post(
        "https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api.json",
        newJob
      )
      .then((response) => {
        setLoading(false);
        // Clear form fields after successful submission
        setName("");
        setCompany("");
        setDescription("");
        setSalary("");
        setLocation("");
        setMap("");
        setLogo("");
        setContractType("");
        setJobHours("");
        setRemote("");
        window.scrollTo(0, 0);
        navigate("/"); // Redirect to homepage
      })
      .catch((e) => {
        setLoading(false);
        setError("Error creating a new job. Please try again.");
        console.log("Error creating a new job...", e);
      });
  };

  return (
    <div className="list-container">
      <div
        id="forms-container-create"
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">List Your Job</h2>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Name:
            </label>
            <input
              type="text"
              required
              name="job_name"
              placeholder="E.g. Sales Assistant"
              value={job_name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name:
            </label>
            <input
              type="text"
              name="company_name"
              placeholder="E.g. Ironhack"
              value={company_name}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <input
              type="text"
              name="description"
              placeholder="Job description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary:
            </label>
            <input
              type="text"
              name="salary"
              placeholder="E.g. 40,000 $"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-500">USD</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              type="text"
              name="company_location"
              placeholder="Add your address"
              value={company_location}
              required
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Map URL:
            </label>
            <input
              type="text"
              name="company_location_maps"
              placeholder="Map URL"
              value={company_location_maps}
              onChange={(e) => setMap(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Logo:
            </label>
            <input
              type="text"
              required
              name="company_logo_url"
              placeholder="Paste URL here"
              value={company_logo_url}
              onChange={(e) => setLogo(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contract Type:
            </label>
            <input
              type="text"
              required
              name="type_contract"
              placeholder="Temporary or Permanent"
              value={type_contract}
              onChange={(e) => setContractType(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Hours:
            </label>
            <input
              type="text"
              name="job_hours"
              placeholder="Full-time or Part-time"
              value={job_hours}
              required
              onChange={(e) => setJobHours(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700">
              Remote:
            </label>
            <div className="ml-4">
              <input
                type="radio"
                required
                name="remote"
                id="remote-true"
                value="true"
                checked={remote === "true"}
                onChange={() => setRemote("true")}
                className="mr-2"
              />
              <label htmlFor="remote-true">Yes</label>
              <input
                type="radio"
                required
                name="remote"
                id="remote-false"
                value="false"
                checked={remote === "false"}
                onChange={() => setRemote("false")}
                className="ml-4 mr-2"
              />
              <label htmlFor="remote-false">No</label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddJobForm;
