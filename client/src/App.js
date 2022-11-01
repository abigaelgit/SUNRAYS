import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

//PAGES
import Admin from "./pages/Admin";
import Project from "./pages/Project";
import Finance from "./pages/Finance";
import Inventory from "./pages/Inventory";
import Delivery from "./pages/Delivery";
import Service from "./pages/Service";
import Report from "./pages/Report";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Admin />} />
            <Route path="/project" element={<Project />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/service" element={<Service />} />
            <Route path="/report" element={<Report />} />

          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
