import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "../pages/Services";

test("services page has 6 headers", () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  const servicesHeaders = screen.getAllByRole("heading");

  expect(servicesHeaders).toHaveLength(6);
});
