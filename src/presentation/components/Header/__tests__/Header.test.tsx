import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "../Header";

describe("Header component", () => {
  it("should render the YouTube logo and the Search component", () => {
    const { getByRole, getByPlaceholderText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoLink = getByRole("link", { name: "" });
    expect(logoLink).toBeInTheDocument();

    const searchInput = getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
});
