import { render, screen } from "@testing-library/react";
import StatCard from "../StatCard";

describe("StatCard component", () => {
  it("renders the title and value correctly", () => {
    render(<StatCard title="Customers" value="3,781" change="+11.01" />);

    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("3,781")).toBeInTheDocument();
  });

  it("shows positive change with upward icon", () => {
    render(<StatCard title="Revenue" value="$695" change="+15.03" />);

    const changeEl = screen.getByText(/\+15.03%/);
    expect(changeEl).toHaveClass("change-positive");
    expect(changeEl.querySelector("svg")).toBeInTheDocument();
  });

  it("shows negative change with downward icon", () => {
    render(<StatCard title="Orders" value="1,219" change="-0.03" />);

    const changeEl = screen.getByText(/-0.03%/);
    expect(changeEl).toHaveClass("change-negative");
    expect(changeEl.querySelector("svg")).toBeInTheDocument();
  });
});
