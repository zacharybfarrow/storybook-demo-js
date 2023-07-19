import React from "react";
import { render, screen } from "@testing-library/react";
import Icon, { ICONS } from "./Icon";

const iconNames = Object.keys(ICONS);

test("Icon/selection.json provides paths for each icon", () => {
  let blankPaths = 0;
  let failingIcons = [];
  iconNames.forEach((iconName) => {
    if (ICONS[iconName].paths.length === 0) {
      blankPaths += 1;
      failingIcons.push(iconName);
    } else {
      ICONS[iconName].paths.forEach((path) => {
        if (path === "") {
          blankPaths += 1;
          failingIcons.push(iconName);
        }
      });
    }
  });

  try {
    expect(blankPaths).toBe(0);
  } catch {
    throw new Error(`No path provided for ${failingIcons}`);
  }
});

describe.each(iconNames)(
  "Icon component renders proper path elements for %s",
  function (iconName) {
    it("renders a path element for all paths in the source json", async () => {
      render(<Icon iconName={iconName} />);

      const numOfPaths = ICONS[iconName].paths.length;
      const icon = await screen.getByRole("img");
      let pathChildren = 0;
      Array.from(icon.children).forEach((child) => {
        if (child.tagName === "path") {
          pathChildren += 1;
        }
      });

      expect(pathChildren).toEqual(numOfPaths);
    });

    it("correctly sets the d attribute for each path", async () => {
      render(<Icon iconName={iconName} />);

      const jsonPaths = ICONS[iconName].paths;
      const icon = await screen.getByRole("img");
      let iconPaths = [];
      Array.from(icon.children).forEach((child) => {
        if (child.tagName === "path") {
          iconPaths.push(child.getAttribute("d"));
        }
      });

      expect(iconPaths.sort()).toStrictEqual(jsonPaths.sort());
    });
  }
);

describe("Icon component renders proper html elements", function () {
  it("renders an svg element if a valid iconName is provided", async () => {
    render(<Icon iconName="E1X_ico_font" />);

    const icon = await screen.getByRole("img");

    expect(icon.tagName).toBe("svg");
  });

  it("returns null if iconName is not valid", async () => {
    const { container } = render(<Icon iconName="doesnt-exist" />);

    expect(container.innerHTML).toBe("");
  });

  it("renders a title element when a title is provided", async () => {
    render(<Icon iconName="E1X_ico_font" title="test title" />);

    const titleElement = await screen.getByTitle("test title");

    expect(titleElement.innerHTML).toBe("test title");
  });

  it("renders no title element when a title is not provided", async () => {
    render(<Icon iconName="E1X_ico_font" />);

    const icon = await screen.getByRole("img");
    const titleElements = icon.getElementsByTagName("title");

    expect(titleElements.length).toBe(0);
  });

  it("renders a desc element when a desc is provided", async () => {
    render(<Icon iconName="E1X_ico_font" desc="my desc" />);

    const icon = await screen.getByRole("img");
    const descElement = icon.getElementsByTagName("desc")[0];

    expect(descElement.innerHTML).toBe("my desc");
  });

  it("renders no desc element when a desc is not provided", async () => {
    render(<Icon iconName="E1X_ico_font" />);

    const icon = await screen.getByRole("img");
    const descElements = icon.getElementsByTagName("desc");

    expect(descElements.length).toBe(0);
  });
});

/* describe("Icon applies correct attributes", function () {
  it("sets role as img")
});
 */
