import axios from "axios";

function AddJobForm(props) {
  //CREATE NEW JOB FORM//
  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      job_name: "Quality Assurance Analyst",
      company_name: "Tech Check Inc.",
      description: "Ensure product quality through testing and analysis.",
      salary: "$65,000 - $85,000",
      company_location: "San Diego, CA",
      company_location_maps: "https://maps.google.com/?q=San+Diego,+CA",
      company_logo_url: "https://example.com/logo38.png",
      type_contract: "permanent",
      job_hours: "full-time",
      remote: true,
    };

    axios
      .post(
        "https://pathfoundry-2d121-default-rtdb.europe-west1.firebasedatabase.app/jobs-api.json",
        newJob
      )
      .then((response) => {
        navigate("/projects"); // redirect to projects page
      })
      .catch((e) => console.log("Error creating a new project...", e));
  };
  return <h2>Job form goes here</h2>;
}
export default AddJobForm;
