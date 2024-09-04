import React from "react";

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu" role="navigation">
      <ul className="menu-list text-lg">
        <li>
          <a href="#candlestick-chart">Candlestick Chart</a>
        </li>
        <li>
          <a href="#line-chart">Line Chart</a>
        </li>
        <li>
          <a href="#bar-chart">Bar Chart</a>
        </li>
        <li>
          <a href="#pie-chart">Pie Chart</a>
        </li>
        <li>
          <a href="#pizza-pie-chart">Pizza Pie Chart</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
