import React from "react";
import { render, screen } from "@testing-library/react";
import Icon, { ICONS } from "./Icon";

const iconNames = Object.keys(ICONS);

describe.each(iconNames)("%s: Sanity Check", function (iconName) {
  test("selection.json provides at least one path for icon", () => {
    expect(ICONS[iconName].paths.length).not.toBe(0);
  });

  test("selection.json paths are not blank strings", () => {
    let blankPaths = 0;
    ICONS[iconName].paths.forEach((path) => {
      if (path === "") {
        blankPaths += 1;
      }
    });

    expect(blankPaths).toBe(0);
  });

  it("renders a path element for all paths in the source json", async () => {
    render(<Icon name={iconName} />);

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
    render(<Icon name={iconName} />);

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
});

describe("Icon component renders proper html elements", function () {
  it("renders an svg element if a valid name is provided", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");

    expect(icon.tagName).toBe("svg");
  });

  it("throws an error if name is not valid", async () => {
    expect(() => {
      render(<Icon name="doesnt-exist" />);
    }).toThrow();
  });

  it("renders a title element when a title is provided", async () => {
    render(<Icon name="E1X_ico_font" title="test title" />);

    const titleElement = await screen.getByTitle("test title");

    expect(titleElement.innerHTML).toBe("test title");
  });

  it("renders no title element when a title is not provided", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");
    const titleElements = icon.getElementsByTagName("title");

    expect(titleElements.length).toBe(0);
  });

  it("renders a desc element when a desc is provided", async () => {
    render(<Icon name="E1X_ico_font" desc="my desc" />);

    const icon = await screen.getByRole("img");
    const descElement = icon.getElementsByTagName("desc")[0];

    expect(descElement.innerHTML).toBe("my desc");
  });

  it("renders no desc element when a desc is not provided", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");
    const descElements = icon.getElementsByTagName("desc");

    expect(descElements.length).toBe(0);
  });
});

/* describe("Icon applies correct attributes", function () {
  it("sets role as img")
});
 */
