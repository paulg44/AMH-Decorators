import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OurWork from "../pages/OurWork";

test("six images render", () => {
  render(
    <MemoryRouter>
      <OurWork />
    </MemoryRouter>
  );

  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(6);
});
