import React from "react";
import { render, screen } from "@testing-library/react";
import Icon, { ICONS, IconSizes } from "./Icon";

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

describe("Icon applies attributes and properties correctly", function () {
  it("should set role as img", async () => {
    render(<Icon name="E1X_ico_font" data-testid="test" />);

    const icon = await screen.getByTestId("test");

    expect(icon.getAttribute("role")).toBe("img");
  });
  it("should set the backgroundColor if provided", async () => {
    render(<Icon name="E1X_ico_font" backgroundColor="black" />);

    const icon = await screen.getByRole("img");
    const style = window.getComputedStyle(icon);

    expect(style.backgroundColor).toBe("black");
  });
  it("should set the borderRadius if backgroundColor and borderRadius are provided", async () => {
    render(
      <Icon name="E1X_ico_font" backgroundColor="black" borderRadius="10px" />
    );

    const icon = await screen.getByRole("img");
    const style = window.getComputedStyle(icon);

    expect(style.borderRadius).toBe("10px");
  });
  it("should not set the borderRadius if backgroundColor is not probided", async () => {
    render(<Icon name="E1X_ico_font" borderRadius="10px" />);

    const icon = await screen.getByRole("img");
    const style = window.getComputedStyle(icon);

    expect(style.borderRadius).toBe("");
  });
  it("should set the xml namespace (xmlns) properly", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("xmlns")).toBe("http://www.w3.org/2000/svg");
  });
  it("should set the html id if provided", async () => {
    render(<Icon name="E1X_ico_font" id="myId" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("id")).toBe("myId");
  });
  it("should set height if size is provided", async () => {
    const testSize = "XL";
    render(<Icon name="E1X_ico_font" size={testSize} />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("height")).toBe(IconSizes[testSize]);
  });
  it("should set width if size is provided", async () => {
    const testSize = "XL";
    render(<Icon name="E1X_ico_font" size={testSize} />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("width")).toBe(IconSizes[testSize]);
  });
  it("should override the default width if size is provided", async () => {
    const testSize = "XL";
    render(<Icon name="E1X_ico_font" size={testSize} data-testid="forTest" />);
    render(<Icon name="E1X_ico_font" data-testid="default" />);

    const icon = await screen.getByTestId("forTest");
    const defaultIcon = await screen.getByTestId("default");

    expect(icon.getAttribute("width")).not.toStrictEqual(
      defaultIcon.getAttribute("width")
    );
  });
  it("should override the default height if size is provided", async () => {
    const testSize = "XL";
    render(<Icon name="E1X_ico_font" size={testSize} data-testid="forTest" />);
    render(<Icon name="E1X_ico_font" data-testid="default" />);

    const icon = await screen.getByTestId("forTest");
    const defaultIcon = await screen.getByTestId("default");

    expect(icon.getAttribute("height")).not.toStrictEqual(
      defaultIcon.getAttribute("height")
    );
  });
  it("should set the viewBox to '0 0 1024 1024'", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("viewBox")).toBe("0 0 1024 1024");
  });
  // will need to rework if we don't use Tailwind
  it("should disable pointer events (and thus the html5 auto-tooltip) if the tooltip prop is not provided", async () => {
    render(<Icon name="E1X_ico_font" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("class")).toContain("pointer-events-none");
  });
  // will need to rework if we don't use Tailwind
  it("should set pointer events to auto (and thus the html5 auto-tooltip) if the tooltip prop is provided", async () => {
    render(<Icon name="E1X_ico_font" tooltip />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("class")).toContain("pointer-events-auto");
  });
  it("should warn the developer if the title prop is provided but the titleId is not", async () => {
    const logSpy = jest.spyOn(global.console, "warn");
    render(<Icon name="E1X_ico_font" title="myTitle" />);

    expect(logSpy).toHaveBeenCalled();

    logSpy.mockRestore();
  });
  it("should not log a warning if both title and titleId are provided", async () => {
    const logSpy = jest.spyOn(global.console, "warn");
    render(<Icon name="E1X_ico_font" title="myTitle" titleId="titleId" />);

    expect(logSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
  });
  it("should set the aria-labelledby property with the titleId if provided", async () => {
    render(<Icon name="E1X_ico_font" title="myTitle" titleId="titleId" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("aria-labelledby")).toBe("titleId");
  });
  it("should warn the developer if the desc prop is provided but the descId is not", async () => {
    const logSpy = jest.spyOn(global.console, "warn");
    render(<Icon name="E1X_ico_font" desc="description" />);

    expect(logSpy).toHaveBeenCalled();

    logSpy.mockRestore();
  });
  it("should not log a warning if both desc and descId are provided", async () => {
    const logSpy = jest.spyOn(global.console, "warn");
    render(<Icon name="E1X_ico_font" desc="description" descId="descId" />);

    expect(logSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
  });
  it("should set the aria-describedby with the descId if provided", async () => {
    render(<Icon name="E1X_ico_font" desc="description" descId="descId" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("aria-describedby")).toBe("descId");
  });
});
