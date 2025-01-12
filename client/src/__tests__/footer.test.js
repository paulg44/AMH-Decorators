import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";

test("two links render, one for clients facebook, one for my portfolio", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const allFooterLinks = screen.getAllByRole("link");
  expect(allFooterLinks).toHaveLength(2);

  const FBLink = screen.getByRole("link", { name: /facebook/i });
  const portfolioLink = screen.getByRole("link", { name: /pg/i });

  expect(FBLink).toHaveAttribute("href", "https://www.facebook.com/amhdecor/");
  expect(portfolioLink).toHaveAttribute("href", "https://paulgarton.com/");
});
