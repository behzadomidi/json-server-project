import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../landing/LandingPage";
import BestPost from "../bestPost/BestPost";
import LastPost from "../lastPost/LastPost";
import Admin from "../admin/Admin";
import AddAdmin from "../admin/AddAdmin";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/bestpost" element={<BestPost />} />
        <Route path="/lastpost" element={<LastPost />} />
      </Routes>
    </div>
  );
};

export default HomePage;
