import "./App.css";
import AddJobForm from "./components/AddJobForm";
import JobsList from "./components/JobsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  return (
    <>
      <AddJobForm jobs={jobs} setJobs={setJobs} />
      <Routes>
        <Route path="/" element={<JobsList jobs={jobs} setJobs={setJobs} />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
