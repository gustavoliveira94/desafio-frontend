import { describe, it, expect } from "vitest";

import { Layout } from "../Layout";
import { render } from "@/configs/tests/helperTest";

describe("Layout component", () => {
  it("renders Header and children", () => {
    const { getByTestId, getByText } = render(
      <Layout>
        <div>Child content</div>
      </Layout>,
    );

    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByText("Child content")).toBeInTheDocument();

    const root =
      getByText("Child content").closest("div")?.parentElement?.parentElement
        ?.parentElement;

    expect(root).toBeTruthy();
    expect(root?.className).toContain("max-w-7xl");
  });
});
