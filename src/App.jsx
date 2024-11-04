import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import AddJobForm from "./components/AddJobForm";
import JobsList from "./components/JobsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<JobsList jobs={jobs} setJobs={setJobs} />} />
        <Route
          path="/jobs/addjob"
          element={<AddJobForm jobs={jobs} setJobs={setJobs} />}
        />

        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex flex-1">
                <Sidebar />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
