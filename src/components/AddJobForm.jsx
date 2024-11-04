import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/forms.css";

function AddJobForm(props) {
  //CREATE NEW JOB FORM//

  //states//
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

  //redirecting//
  const navigate = useNavigate();

  //not reloading//
  const handleSubmit = (e) => {
    e.preventDefault();

    //template to add//
    const newJob = {
      job_name: job_name,
      company_name: company_name,
      description: description,
      salary: salary,
      company_location: company_location,
      company_location_maps: company_location_maps,
      company_logo_url: company_logo_url,
      type_contract: type_contract,
      job_hours: job_hours,
      remote: remote,
    };

    //adding to API//
    axios
      .post(
        "https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api.json",
        newJob
      )
      .then((response) => {
        navigate("/");
      })
      .catch((e) => console.log("Error creating a new job...", e));
  };
  return (
    <div className="form-container">
      <div className="forms-header">
        <h2>List your job</h2>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="job-name-label">
          {" "}
          Job Name:
          <input
            type="text"
            name="job_name"
            placeholder="Eg. Sales Assistant"
            value={job_name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="company-name-label">
          {" "}
          Company Name:
          <input
            type="text"
            name="company_name"
            placeholder="Eg. Ironhack"
            value={company_name}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </label>
        <label className="description-label">
          {" "}
          Description:
          <input
            type="text"
            name="description"
            placeholder="Eg. Ironhack"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label className="salary-label">
          {" "}
          Salary:
          <input
            type="text"
            name="salary"
            placeholder="Eg. 40,000 $"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
          $
        </label>
        <label className="company-location-label">
          {" "}
          Address:
          <input
            type="text"
            name="company_location"
            placeholder="Add your address"
            value={company_location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label className="company-location-maps-label">
          {" "}
          Map URL:
          <input
            type="text"
            name="company_location_maps"
            placeholder="Map URL"
            value={company_location_maps}
            onChange={(e) => {
              setMap(e.target.value);
            }}
          />
        </label>
        <label className="company-logo-url-label">
          Logo:
          <input
            type="text"
            name="company_logo_url"
            placeholder="Paste URL here"
            value={company_logo_url}
            onChange={(e) => {
              setLogo(e.target.value);
            }}
          />
        </label>
        <label className="type-contract-label">
          Contract type:
          <input
            type="text"
            name="type_contract"
            placeholder="Temporary or Permanent"
            value={type_contract}
            onChange={(e) => {
              setContractType(e.target.value);
            }}
          />
        </label>
        <label className="job-hours-label">
          Job hours:
          <input
            type="text"
            name="job_hours"
            placeholder="Full-time or Part-time"
            value={job_hours}
            onChange={(e) => {
              setJobHours(e.target.value);
            }}
          />
        </label>
        <label className="remote-label">
          <input
            type="radio"
            name="remote"
            id="Remote"
            value="true"
            checked={remote === "true"}
            onChange={(e) => {
              setRemote(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddJobForm;
