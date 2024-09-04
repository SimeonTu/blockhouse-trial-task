"use client";

import React, { useEffect, useState } from "react";
import CandlestickChart from "../../components/CandlestickChart";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import PizzaPieChart from "../../components/PizzaPieChart";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";

const Dashboard: React.FC = () => {
  // State to track if the scroll-to-top button is visible
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the scroll-to-top button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window back to the top with a smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener to toggle button visibility
    window.addEventListener("scroll", toggleVisibility);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <main>
      {/* Scroll-to-top button */}
      <div
        id="button"
        className={isVisible ? "show" : ""} // Toggle CSS class based on visibility state
        onClick={scrollToTop} // Scroll to top on click
        aria-label="Back to Top"
      >
        <Image
          src="/chevron-up-solid.svg" // Icon for the button
          alt="Back to Top"
          width={24}
          height={24}
        />
      </div>

      {/* Side menu and header */}
      <div id="side-menu-wrapper">
        <p
          style={{
            fontFamily: "BudujSansBold",
            marginBottom: "20px",
          }}
          id="header-text"
        >
          Dashboard for the Blockhouse Web Dev Coding Assignment
        </p>

        <SideMenu />
      </div>

      {/* Main content area */}
      <div style={{ flex: 1 }}>
        {/* Candlestick Chart section */}
        <div
          className="mx-auto"
          style={{ marginBottom: "20px", maxWidth: "768px" }}
          id="candlestick-chart"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Candlestick Chart
          </p>
          <CandlestickChart />
        </div>

        {/* Line Chart section */}
        <div
          className="mx-auto"
          style={{ marginBottom: "20px", maxWidth: "768px" }}
          id="line-chart"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Line Chart
          </p>
          <LineChart />
        </div>

        {/* Bar Chart section */}
        <div
          className="mx-auto"
          style={{ marginBottom: "20px", maxWidth: "768px" }}
          id="bar-chart"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Bar Chart
          </p>
          <BarChart />
        </div>

        {/* Pie Chart section */}
        <div
          className="mx-auto"
          style={{ marginBottom: "20px", maxWidth: "768px" }}
          id="pie-chart"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Pie Chart
          </p>
          <PieChart />
        </div>

        {/* Pizza Pie Chart section */}
        <div
          className="mx-auto"
          style={{ marginBottom: "20px", maxWidth: "768px" }}
          id="pizza-pie-chart"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Pizza Pie Chart (Favorite Pizza Toppings in New York City)
          </p>
          <PizzaPieChart />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
