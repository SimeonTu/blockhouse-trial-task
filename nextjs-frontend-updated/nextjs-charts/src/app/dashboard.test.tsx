import { render, screen } from "@testing-library/react";
import Dashboard from "./page";
import "@testing-library/jest-dom";
import { describe, it, afterEach, vi } from "vitest";



afterEach(() => {
  vi.restoreAllMocks(); // Restore all mocks
});

describe("Dashboard Component", () => {
  it("should render the side menu", () => {
    render(<Dashboard />);
    // Check if SideMenu component is rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it('expect the charts to fail loading without the backend running', async () => {
    // Mock the fetch to simulate a failure
    global.fetch = vi.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    // Render the BarChart component
    render(<Dashboard />);

    // Wait for the error message to appear
    expect(await screen.findByText(/Failed to load bar chart data. Please try again later./i)).toBeInTheDocument();
  });
  it("should show the scroll-to-top button when scrolling", () => {
    render(<Dashboard />);

    // Simulate scrolling
    (global as any).scrollTo = vi.fn(); // Mock window.scrollTo
    window.scrollY = 400; // Scroll past the threshold

    // Re-render to check for updated state
    render(<Dashboard />);
    const buttons = screen.getAllByLabelText("Back to Top");
    expect(buttons.length).toBeGreaterThan(0); // Assert there is at least one button
    expect(buttons[0]).toBeInTheDocument(); // Optionally assert the first button is present
  });

  it("should scroll to top when the button is clicked", () => {
    render(<Dashboard />);

    // Simulate button click
    (global as any).scrollTo = vi.fn(); // Mock window.scrollTo
    const buttons = screen.getAllByLabelText("Back to Top");
    if (buttons.length > 0) {
      buttons[0].click(); // Click the first button
      expect((global as any).scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    } else {
      throw new Error('No "Back to Top" button found');
    }
  });
});
