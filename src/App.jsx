import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import JobsList from "./components/JobsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <main className="">
                <JobsList />
              </main>
            </div>
            <Footer />
          </div>
        }
      />

      <Route path="/" element={<JobsList />} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
