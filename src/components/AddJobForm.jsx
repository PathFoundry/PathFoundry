import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJobForm(props) {
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
        navigate("/"); // Redirect to homepage
      })
      .catch((e) => {
        setLoading(false);
        setError("Error creating a new job. Please try again.");
        console.log("Error creating a new job...", e);
      });
  };

  return (
    <div className="form-container">
      <h2>List Your Job</h2>
      {error && <p className="error-message text-red-600">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="job-name-label">
          Job Name:
          <input
            type="text"
            name="job_name"
            placeholder="E.g. Sales Assistant"
            value={job_name}
            onChange={(e) => setName(e.target.value)}
            required // Make this field required
          />
        </label>
        <label className="company-name-label">
          Company Name:
          <input
            type="text"
            name="company_name"
            placeholder="E.g. Ironhack"
            value={company_name}
            onChange={(e) => setCompany(e.target.value)}
            required // Make this field required
          />
        </label>
        <label className="description-label">
          Description:
          <input
            type="text"
            name="description"
            placeholder="Job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required // Make this field required
          />
        </label>
        <label className="salary-label">
          Salary:
          <input
            type="text"
            name="salary"
            placeholder="E.g. 40,000 $"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          $
        </label>
        <label className="company-location-label">
          Address:
          <input
            type="text"
            name="company_location"
            placeholder="Add your address"
            value={company_location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className="company-location-maps-label">
          Map URL:
          <input
            type="text"
            name="company_location_maps"
            placeholder="Map URL"
            value={company_location_maps}
            onChange={(e) => setMap(e.target.value)}
          />
        </label>
        <label className="company-logo-url-label">
          Logo:
          <input
            type="text"
            name="company_logo_url"
            placeholder="Paste URL here"
            value={company_logo_url}
            onChange={(e) => setLogo(e.target.value)}
          />
        </label>
        <label className="type-contract-label">
          Contract Type:
          <input
            type="text"
            name="type_contract"
            placeholder="Temporary or Permanent"
            value={type_contract}
            onChange={(e) => setContractType(e.target.value)}
          />
        </label>
        <label className="job-hours-label">
          Job Hours:
          <input
            type="text"
            name="job_hours"
            placeholder="Full-time or Part-time"
            value={job_hours}
            onChange={(e) => setJobHours(e.target.value)}
          />
        </label>
        <label className="remote-label">
          Remote:
          <input
            type="radio"
            name="remote"
            id="remote-true"
            value="true"
            checked={remote === "true"}
            onChange={() => setRemote("true")}
          />
          <label htmlFor="remote-true">Yes</label>
          <input
            type="radio"
            name="remote"
            id="remote-false"
            value="false"
            checked={remote === "false"}
            onChange={() => setRemote("false")}
          />
          <label htmlFor="remote-false">No</label>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default AddJobForm;
