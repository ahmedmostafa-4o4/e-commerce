import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Users from "./Users";
import Nav from "./Nav";
import AddAdmin from "./AddAdmin";

function Main() {
  return (
    <div className="dashboard-body">
      <div className="sidebar-contain"></div>
      <Sidebar />
      <div className="dashboard">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/new-admin" element={<AddAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
