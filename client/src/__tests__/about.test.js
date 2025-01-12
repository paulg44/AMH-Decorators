import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../pages/About";

test("four headers render", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const headers = screen.getAllByRole("heading");
  expect(headers).toHaveLength(4);
});
