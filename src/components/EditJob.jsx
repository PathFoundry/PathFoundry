import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {
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

  const { jobId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`
      )
      .then((response) => {
        const newArray = response.data;
        const newResponse = Object.keys(newArray).map((id) => ({
          id,
          ...newArray[id],
        }));
        setName(newResponse.job_name);
        setCompany(newResponse.company_name);
        setDescription(newResponse.description);
        setSalary(newResponse.salary);
        setLocation(newResponse.company_location);
        setMap(newResponse.company_location_maps);
        setLogo(newResponse.company_logo_url);
        setContractType(newResponse.type_contract);
        setJobHours(newResponse.job_hours);
        setRemote(newResponse.remote);
      })
      .catch((error) =>
        console.log("Error getting job details from the API...", error)
      );
  }, [jobId]);

  //not reloading//
  const handleSubmit = (e) => {
    e.preventDefault();

    //template to add//
    const editedJob = {
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
      .put(
        `https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api/${jobId}.json`,
        editedJob
      )
      .then((response) => {
        navigate(`/jobs/${jobId}`);
      })
      .catch((e) => console.log("Error editing job...", e));
  };
  return (
    <div className="form-container">
      <h2>List your job</h2>
      <form onSubmit={handleSubmit}>
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
        <button>Create</button>
      </form>
    </div>
  );
}
export default EditJob;
