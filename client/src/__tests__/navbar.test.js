import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import Navbar from "../components/navbar/Navbar.js";

test("navigates to the about page when about link is clicked", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const aboutLink = screen.getByRole("link", { name: /about/i });
  expect(aboutLink).toBeInTheDocument();
  user.click(aboutLink);

  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

test("has five links", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(5);
});
