import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as IconImpl from "./Icon";
import SearchableIcons from "./SearchableIcons";

describe("Searchable Icons Functionality", function () {
  // mock data with same format as ICONS
  IconImpl.ICONS = {
    "masked_icons_fonts-169": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon1", "t1", "a", "gh"],
    },
    "E1X_ico_font-01": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon2", "t2", "ab"],
    },
    "E1X_ico_font-02": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon3", "t2", "abc"],
    },
    "E1X_ico_font-03": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon4", "t2", "abcd"],
    },
    "E1X_ico_font-04": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon5", "t2", "abcde"],
    },
    "E1X_ico_font-05": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon6", "t2", "abcdef"],
    },
    "E1X_ico_font-06": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon7", "t2", "abcdefg"],
    },
    "E1X_ico_font-07": {
      paths: ["M0 0h1024v1024H0V0z"],
      tags: ["icon8", "t2", "abcdefgh"],
    },
  };

  test("Clicking the Show Fragments checkbox should add icons tagged as fragments to the display", async () => {
    render(<SearchableIcons />);

    const fragCheck = await screen.getByRole("checkbox");
    fireEvent.click(fragCheck);
    const iconFrags = await screen.getAllByLabelText("masked_icons_fonts-169");
    const iconOptions = await screen.getAllByRole("img");

    expect(iconFrags.length).toBe(1);
    expect(iconOptions.length).toBe(8);
  });
  test("Clicking the Show Fragments button again when it is checked, should cause icon fragments to disappear", async () => {
    render(<SearchableIcons />);

    const fragCheck = await screen.getByRole("checkbox");
    fireEvent.click(fragCheck); // click once to show fragments
    fireEvent.click(fragCheck); // click twice to hide them again
    const iconOptions = await screen.getAllByRole("img");

    expect(screen.queryAllByLabelText("masked_icons_fonts-169")).toStrictEqual(
      []
    );
    expect(iconOptions.length).toBe(7);
  });
  test("Default view should not show icon fragments", async () => {
    render(<SearchableIcons />);

    expect(screen.queryAllByLabelText("masked_icons_fonts-169")).toStrictEqual(
      []
    );
  });
  test("Default view should show all icons that are not fragments", async () => {
    render(<SearchableIcons />);

    const iconOptions = await screen.getAllByRole("img");

    expect(iconOptions.length).toBe(7);
  });
  test("Typing a filter into the search input should return all icons that contain the filter in their tags", async () => {
    render(<SearchableIcons />);

    const searchInput = await screen.getByRole("search");
    fireEvent.change(searchInput, { target: { value: "fg" } });
    const iconOptions = await screen.getAllByRole("img");

    expect(iconOptions.length).toBe(2);
  });
  test("Typing a filter into the search input should return both icons whose tags contain the filter and exact matches", async () => {
    render(<SearchableIcons />);

    const searchInput = await screen.getByRole("search");
    fireEvent.change(searchInput, { target: { value: "abcdef" } });
    const exactMatch = await screen.getByLabelText("E1X_ico_font-05");
    const iconOptions = await screen.getAllByRole("img");

    expect(exactMatch).not.toBe(null);
    expect(iconOptions.length).toBe(3);
  });
  test("No icons should be displayed if the filter doesn't match any tags", async () => {
    render(<SearchableIcons />);

    const searchInput = await screen.getByRole("search");
    fireEvent.change(searchInput, { target: { value: "xyz" } });
    const iconOptions = await screen.queryAllByRole("img");

    expect(iconOptions).toStrictEqual([]);
  });
  test("Search should return matching Icon Fragments if Show Fragments is checked", async () => {
    render(<SearchableIcons />);

    const fragCheck = await screen.getByRole("checkbox");
    const searchInput = await screen.getByRole("search");
    fireEvent.click(fragCheck);
    fireEvent.change(searchInput, { target: { value: "gh" } });
    const iconFrags = await screen.getAllByLabelText("masked_icons_fonts-169");
    const iconOptions = await screen.getAllByRole("img");

    expect(iconFrags.length).toBe(1);
    expect(iconOptions.length).toBe(2);
  });
  test("Search should not return matching Icon Fragments if Show Fragments is not checked", async () => {
    render(<SearchableIcons />);

    const searchInput = await screen.getByRole("search");
    fireEvent.change(searchInput, { target: { value: "gh" } });
    const iconFrags = await screen.queryAllByLabelText(
      "masked_icons_fonts-169"
    );
    const iconOptions = await screen.getAllByRole("img");

    expect(iconFrags).toStrictEqual([]);
    expect(iconOptions.length).toBe(1);
  });
  test("Clicking copy button should copy icon name to clipboard", async () => {
    render(<SearchableIcons />);
    render(<input data-testID="testInput" />);
    const user = userEvent.setup({ writeToClipboard: true });

    const firstIconButton = await screen.getAllByRole("button")[0];
    const firstIconLabel = await screen.getAllByText("E1X", {
      exact: false,
    })[0];
    const testInput = await screen.getByTestId("testInput");
    await user.click(firstIconButton);
    testInput.focus();
    await user.paste();

    expect(testInput.value).toBe(firstIconLabel.innerHTML);
  });
  test("Clicking copy button should cause alert to become visible", async () => {
    render(<SearchableIcons />);

    const firstIconButton = await screen.getAllByRole("button")[0];
    await fireEvent.click(firstIconButton);
    const alert = await screen.findByRole("alert");
    const alertStyles = window.getComputedStyle(alert);

    expect(alertStyles.display).not.toBe("none");
  });
  test("Copy button alert should close again after 1.75 seconds", async () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    render(<SearchableIcons />);

    const firstIconButton = await screen.getAllByRole("button")[0];
    await fireEvent.click(firstIconButton);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1750);
    jest.useRealTimers();
  });
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });
});
