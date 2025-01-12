import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("home renders with header", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /am h decorating/i })
  ).toBeInTheDocument();
});

test("contact button to be present and have href link", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const contactBtn = screen.getByRole("link", { name: /contact/i });

  expect(contactBtn).toHaveAttribute("href", "/contact");
});
