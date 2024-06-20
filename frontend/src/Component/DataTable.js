import React, { useEffect, useState } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL);
      setData(response.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  const handleComplete = async (id) => {
    try {
      const updatedData = data.map((report) =>
        report._id === id
          ? { ...report, completed: true, status: "completed" }
          : report
      );
      setData(updatedData);

      await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
        completed: true,
        status: "completed",
      });
    } catch (error) {
      console.error("Error marking as complete:", error);
      if (error.response && error.response.status === 404) {
        alert("Report not found. It may have been deleted.");
      } else {
        setError("Error marking as complete. Please try again later.");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center">Reports Data</h2>
      {data.length === 0 ? (
        <p className="text-center">No data available</p>
      ) : (
        <div className="table-responsive">
          <table className="table text-center table-bordered mt-4">
            <thead>
              <tr>
                <th>VIN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Date Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((report) => (
                <tr
                  key={report._id}
                  className={report.completed ? "table-success" : ""}
                >
                  <td>{report.vin}</td>
                  <td>{report.name}</td>
                  <td>{report.email}</td>
                  <td>{report.phoneNumber}</td>
                  <td>{report.status}</td>
                  <td>{new Date(report.dateTime).toLocaleString()}</td>
                  <td>
                    {!report.completed && (
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleComplete(report._id)}
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;
