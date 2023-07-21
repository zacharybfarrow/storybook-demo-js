import React from "react";
import PropTypes from "prop-types";
import iconJson from "./selection.json";

export let ICONS = [];

iconJson.icons.forEach((icon) => {
  ICONS[icon.properties.name] = icon.icon;
});

export default function Icon({
  name,
  title,
  titleId,
  desc,
  descId,
  height = "10em",
  width = "10em",
  backgroundColor,
  borderRadius,
  tooltip,
  id,
  ...props
}) {
  if (!Object.keys(ICONS).includes(name)) {
    throw new Error("Must provide valid icon name!");
  }

  if (title && !titleId) {
    console.warn(
      "WARNING: you have provided a title without a titleId. The aria-labelledby attribute is uncoupled from the title element and screenreading technology may be unable to name this icon."
    );
  }

  if (desc && !descId) {
    console.warn(
      "WARNING: you have provided a desc without a descId. The aria-describedby attribute is uncoupled from the desc element and screenreading technology may be unable to describe this icon."
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      id={id}
      width={width} // we need fixed options for this
      height={height} // need fixed options for this
      viewBox="0 0 1024 1024"
      className={tooltip ? "pointer-events-auto" : "pointer-events-none"}
      aria-labelledby={titleId}
      aria-describedby={descId}
      {...props}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor, borderRadius: borderRadius }
          : {}
      }
    >
      {desc ? <desc id={descId}>{desc}</desc> : null}
      {title ? <title id={titleId}>{title}</title> : null}
      {ICONS[name].paths.map((path, i) => {
        return (
          <path key={name + "-path-" + i} id={name + "-path-" + i} d={path} />
        );
      })}
    </svg>
  );
}

Icon.propTypes = {
  /**
   * Specifies the icon that will be rendered, based on the pre-populated names in selection.json
   */
  name: PropTypes.oneOf(Object.keys(ICONS)),
  /**
   * Specifies the color of the icon.
   */
  fill: PropTypes.string,
  /**
   * Specifies the background color for the icon, they are transparent by default.
   */
  backgroundColor: PropTypes.string,
  /**
   * If using a background color, sets the border radius of the background.
   */
  borderRadius: PropTypes.string,
  /**
   * Specifies the height of the icon.
   */
  height: PropTypes.string,
  /**
   * Specifies the width of the icon.
   */
  width: PropTypes.string,
  /**
   * The unique html id you'd like to provide for the Icon
   */
  id: PropTypes.string,
  /**
   * Specifies the title of the icon. This property is used to provide a textual label or name for the icon.
   * It is applied to the <title> element inside the SVG, which serves as an accessible name for the icon when using assistive technologies like screen readers.
   */
  title: PropTypes.string,
  /**
   * Specifies the ID of the element that contains the title. This property is used to associate the title with a specific element, providing further context or structure.
   * It is applied to the aria-labelledby attribute of the SVG element, referencing the element with the specified ID to provide the accessible name for the icon.
   */
  titleId: PropTypes.string,
  /**
   * Specifies the description of the icon. This property is used to provide a textual description or additional information about the icon's purpose or functionality.
   * It is applied to the <desc> element inside the SVG, which provides a detailed description of the icon for accessibility purposes.
   */
  desc: PropTypes.string,
  /**
   * Specifies the ID of the element that contains the description. This property is used to associate the description with a specific element, providing further context or structure.
   * It is applied to the aria-describedby attribute of the SVG element, referencing the element with the specified ID to provide additional information about the icon.
   */
  descId: PropTypes.string,
  /**
   * Specifies whether or not a tooltip should be applied to the icon on mouseover. Defaults to false.
   */
  tooltip: PropTypes.bool,
};

Icon.defaultProps = {
  height: "10em",
  width: "10em",
  tooltip: false,
};
