import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './page';
import { jest } from '@jest/globals';

// Mock the chart components
jest.mock('../../components/CandlestickChart', () => {
    const MockCandlestickChart = () => <div>CandlestickChart</div>;
    MockCandlestickChart.displayName = 'MockCandlestickChart';
    return MockCandlestickChart;
  });
  
  jest.mock('../../components/LineChart', () => {
    const MockLineChart = () => <div>LineChart</div>;
    MockLineChart.displayName = 'MockLineChart';
    return MockLineChart;
  });
  
  jest.mock('../../components/BarChart', () => {
    const MockBarChart = () => <div>BarChart</div>;
    MockBarChart.displayName = 'MockBarChart';
    return MockBarChart;
  });
  
  jest.mock('../../components/PieChart', () => {
    const MockPieChart = () => <div>PieChart</div>;
    MockPieChart.displayName = 'MockPieChart';
    return MockPieChart;
  });
  
  jest.mock('../../components/PizzaPieChart', () => {
    const MockPizzaPieChart = () => <div>PizzaPieChart</div>;
    MockPizzaPieChart.displayName = 'MockPizzaPieChart';
    return MockPizzaPieChart;
  });
  
  jest.mock('../../components/SideMenu', () => {
    const MockSideMenu = () => <div>SideMenu</div>;
    MockSideMenu.displayName = 'MockSideMenu';
    return MockSideMenu;
  });

describe('Dashboard', () => {
  beforeEach(() => {
    // Set up the mock scroll behavior
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  test('renders all charts and side menu', () => {
    render(<Dashboard />);
    expect(screen.getByText('Candlestick Chart')).toBeInTheDocument();
    expect(screen.getByText('Line Chart')).toBeInTheDocument();
    expect(screen.getByText('Bar Chart')).toBeInTheDocument();
    expect(screen.getByText('Pie Chart')).toBeInTheDocument();
    expect(screen.getByText('Pizza Pie Chart (Favorite Pizza Toppings in New York City)')).toBeInTheDocument();
    expect(screen.getByText(/SideMenu/i)).toBeInTheDocument();
  });

  test('button becomes visible after scrolling down', () => {
    render(<Dashboard />);
    // Simulate scrolling
    window.scrollY = 350;
    fireEvent.scroll(window);
    expect(screen.getByLabelText('Back to Top')).toHaveClass('show');
  });

  test('button scrolls to top on click', () => {
    render(<Dashboard />);
    // Mock the scrollTo method
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    fireEvent.click(screen.getByLabelText('Back to Top'));
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });
});
