import { useState, useEffect } from "react";
import { ICONS } from "./Icon";
import Icon from "./Icon";

const SearchableIcons = () => {
  const [filter, setFilter] = useState("");
  const [showFragments, setShowFragments] = useState(false);
  const [options, setOptions] = useState([]);

  function handleChange(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    let iconsAsArray = Object.entries(ICONS);
    let iconOptions = iconsAsArray.filter(
      (icon) =>
        icon[1].tags.some(
          (tag) => tag.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) &&
        (showFragments
          ? true
          : !icon[1].tags.includes("t1") || // will not need this first line once t1, t2, or t3 have been added to all icons
            icon[1].tags.includes("t2") ||
            icon[1].tags.includes("t3"))
    );
    let iconNames = Object.keys(Object.fromEntries(iconOptions));
    setOptions(iconNames);
  }, [filter, showFragments]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          label="Search..."
          id="searchIcons"
          style={{
            border: "solid black 2px",
            padding: "6px",
            margin: "0px 4px 10px 10px",
            borderRadius: "12px",
          }}
          placeholder="Search icons"
          autoComplete="off"
          value={filter}
          onChange={handleChange}
        />
        <fieldset style={{ marginTop: "8px" }}>
          <label
            id="fragCheckLabel"
            htmlFor="fragCheck"
            style={{
              padding: "6px",
              margin: "0px 4px 10px 10px",
            }}
          >
            Show Icon Fragments?
          </label>
          <input
            id="fragCheck"
            name="fragCheck"
            type="checkbox"
            value={showFragments}
            onChange={() => {
              showFragments ? setShowFragments(false) : setShowFragments(true);
            }}
          />
        </fieldset>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {options.map((icon) => {
          return (
            <div
              key={`${icon}div`}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid grey 1px",
                borderRadius: "12px",
                padding: "10px",
                margin: "10px",
                alignItems: "center",
                width: "20%",
                boxShadow: "0 2px 2px 0 lightgrey",
              }}
            >
              <Icon
                key={`${icon}preview`}
                name={icon}
                title={icon}
                tooltip
                height="5em"
                width="5em"
              />
              <p
                style={{
                  fontSize: "1.15em",
                  fontWeight: "bold",
                }}
                key={`${icon}label`}
              >
                {icon}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchableIcons;
