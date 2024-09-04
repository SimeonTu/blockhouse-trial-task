"use client";

import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
} from "recharts";

const CandlestickChart: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/candlestick-data/?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching candlestick chart data:", error);
        setError("Failed to load candlestick chart data. Please try again later.");
        setLoading(false);
      });
  }, []);

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
        <ResponsiveContainer data-testid="candlestick-chart" width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="open" stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey="high" stroke="#82ca9d" />
            <Line type="monotone" dataKey="low" stroke="#ffc658" />
            <Line type="monotone" dataKey="close" stroke="#ff7300" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CandlestickChart;
