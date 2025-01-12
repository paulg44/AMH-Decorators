import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../pages/Contact";

test("a link for email and two for phone render", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  const allContactLinks = screen.getAllByRole("link");

  expect(allContactLinks).toHaveLength(3);
});

test("email and phone number have correct href's", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  const emailLink = screen.getByRole("link", {
    name: /A.M.H_Decorating@mail.com/i,
  });
  const mobilePhoneLink = screen.getByRole("link", { name: /07436814786/i });
  const homePhoneLink = screen.getByRole("link", { name: /01332 669822/i });

  expect(emailLink).toHaveAttribute("href", "mailto:A.M.H_Decorating@mail.com");
  expect(mobilePhoneLink).toHaveAttribute("href", "tel:07436814786");
  expect(homePhoneLink).toHaveAttribute("href", "tel:01332 669822");
});
