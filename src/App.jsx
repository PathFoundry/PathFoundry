import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditJob from "./components/EditJob";
import JobsList from "./components/JobsList";
import AddJobForm from "./components/AddJobForm";
import JobDetails from "./components/JobDetails";
import About from "./components/About";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef();

  // search bar (state created above)
  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setJobs((prev) => [...prev, value]);
    setFilteredItems((prev) => [...prev, value]);
    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setFilteredItems(
      jobs.filter((job) =>
        job.job_name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onChange={onChange} inputRef={inputRef} onSubmit={onSubmit} />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <JobsList
                  jobs={jobs}
                  setJobs={setJobs}
                  filteredItems={filteredItems}
                />
              }
            />
            <Route
              path="/jobs/:jobId"
              element={<JobDetails setJobs={setJobs} />}
            />
            <Route
              path="/jobs/addjob"
              element={<AddJobForm jobs={jobs} setJobs={setJobs} />}
            />
            <Route path="/jobs/:jobId/edit" element={<EditJob />} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <section className="bg-white dark:bg-gray-900">
                  <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                      <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800"></p>
                      <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Page not found
                      </h1>
                      <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Oops! Nothing to see here! Feel free to navigate back
                        Home 🙃
                      </p>
                      <button
                        onClick={() => navigate("/")}
                        className="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                      >
                        Home
                      </button>
                    </div>
                  </div>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
