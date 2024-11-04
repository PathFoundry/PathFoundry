import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditJob from "./components/EditJob";
import JobsList from "./components/JobsList";
import AddJobForm from "./components/AddJobForm";
import JobDetails from "./components/JobDetails";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<JobsList jobs={jobs} setJobs={setJobs} />}
            />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route
              path="/jobs/addjob"
              element={<AddJobForm jobs={jobs} setJobs={setJobs} />}
            />
            <Route path="/jobs/:jobId/edit" element={<EditJob />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
