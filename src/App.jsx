import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import AddJobForm from "./components/AddJobForm";
import JobsList from "./components/JobsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<JobsList />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
