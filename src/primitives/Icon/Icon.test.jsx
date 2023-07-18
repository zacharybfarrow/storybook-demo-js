import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "jest";
import Icon, { ICONS } from "./Icon";

const iconNames = Object.keys(ICONS);

describe.each(iconNames)(
  "%s renders proper html elements",
  function (iconName) {
    test("renders an svg element to the page", async () => {
      render(<Icon name={iconName} />);

      const icon = await screen.getByRole("img");

      expect(icon.tagName).toBe("svg");
    });
  }
);
