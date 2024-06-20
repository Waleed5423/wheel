import React from "react";
import DataTable from "./DataTable";

const DashBoard = ({ onLogout }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the Admin Dashboard</h1>
      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
      <DataTable />
    </div>
  );
};

export default DashBoard;
