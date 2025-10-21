import { render as renderTest } from "@testing-library/react";
import type { ReactElement } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export function render(
  ui: ReactElement,
  options = { pathname: "/", route: "/" },
) {
  const wrapper = (
    <MemoryRouter initialEntries={[options.route]}>
      <Routes>
        <Route path={options.pathname} element={ui} />
      </Routes>
    </MemoryRouter>
  );

  return renderTest(wrapper);
}
