"use client";

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register components for Chart.js 4.x
ChartJS.register(
  ArcElement,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PieChart: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/pie-chart-data/?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pie chart data:", error);
        setError("Failed to load pie chart data. Please try again later.");
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: "Pie Chart Data",
        data: data?.data || [],
        backgroundColor: [
          "rgba(255,99,132,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(255,206,86,0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <div
            className="placeholder-glow w-100"
            style={{ maxWidth: "768px", height: "100%", borderRadius: "8px" }}
          >
            <div
              className="placeholder w-100 bg-danger"
              style={{ height: "100%", borderRadius: "8px" }}
            ></div>
          </div>
        </div>
      ) : error ? (
        <div
          style={{
            width: "100%",
            height: "400px",
            maxWidth: "768px",
            maxHeight: "400px",
            border: "1px solid grey",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "1.5em",
            padding: "5px",
          }}
          className="error-message d-flex align-items-center justify-content-center"
        >
          {error}
        </div>
      ) : (
        <>
          <Pie data={chartData} />
          <div>&nbsp;</div>
        </>
      )}
    </div>
  );
};

export default PieChart;
