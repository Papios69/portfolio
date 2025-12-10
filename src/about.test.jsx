import { render, screen } from "@testing-library/react";
import About from "./about.jsx";

test("renders About page title", () => {
  render(<About />);
  const heading = screen.getByText(/About/i);
  expect(heading).toBeInTheDocument();
});
