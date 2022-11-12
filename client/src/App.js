import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//LANDING PAGE
import Landing from "./pages/landing/Landing";
import About from "./pages/landing/About";
import Blog from "./pages/landing/Blog";
import Marketplace from "./pages/landing/Marketplace";
import Support from "./pages/landing/Support";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

//PAGES
import Admin from "./pages/admin/Admin";
import Project from "./pages/admin/Project";
import Finance from "./pages/admin/Finance";
import Inventory from "./pages/admin/Inventory";
import Delivery from "./pages/admin/Delivery";
import Service from "./pages/admin/Service";
import Report from "./pages/admin/Report";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            {/* LANDING */}
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/support" element={<Support />} />

            {/* ADMIN */}
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
