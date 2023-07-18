import React from "react";
//import { PolymorphicProps } from '../types/common'
import Icon, { ICONS } from "../Icon/Icon";
import PropTypes from "prop-types";
import { cx } from "../../utils";

import {
  ButtonIconSize,
  ButtonKind,
  ButtonRadius,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from "./config";

// eslint-disable-next-line

export const Button = React.forwardRef(function Button(
  {
    as,
    children,
    className,
    disabled = false,
    fullWidth,
    href,
    iconLabel,
    icon,
    isIconOnly,
    kind = "SOLID",
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    rounded = "SQUARE",
    size = "SMALL",
    tabIndex,
    type,
    uppercase = false,
    variant = "PRIMARY",
    ...rest
  },
  ref
) {
  const buttonClassName = cx([
    "inline-flex",
    "items-center",
    "justify-center",
    "outline-2",
    "border-2",
    "font-med",
    "transition-all",
    "outline-transparent",
    "focus:outline-blue-500",
    ButtonRadius[rounded],
    ButtonTheme[`${variant}-${kind}`],
    ButtonSize[size],
    fullWidth && "w-full",
    uppercase ? "uppercase" : "",
    className,
  ]);
  const commonProps = { tabIndex, className: buttonClassName, ref };
  const anchorProps = { href };

  let additionalProps = {
    disabled,
    type,
    // add aria props
  };

  let component = "button";

  if (as) {
    component = as;
    additionalProps = {
      ...additionalProps,
      ...anchorProps,
    };
  } else if (href && !disabled) {
    component = "a";
    additionalProps = anchorProps;
  }

  const ButtonIconElement = !icon ? null : (
    <Icon
      aria-label={iconLabel}
      iconName={icon}
      height="2em"
      width="2em"
      /*       style={{
        height: ButtonIconSize[size],
        width: ButtonIconSize[size],
      }} */
    />
  );

  const Button = React.createElement(
    component,
    {
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      ...rest,
      ...commonProps,
      ...additionalProps,
    },
    children,
    ButtonIconElement
  );

  if (isIconOnly && icon) {
    return <>{ButtonIconElement}</>;
  }
  return Button;
});

Button.propTypes = {
  disabled: PropTypes.bool,
  /**
   * Specifies if the Button element should fit the width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * Optionally render the Button element as an `<a>` element
   */
  href: PropTypes.string,
  /**
   * Specifies the name of the icon that is rendered by the Button element
   */
  icon: PropTypes.oneOf(Object.keys(ICONS)),
  /**
   * If icon is rendered by the Button, Specifies the description text provided to screen readers
   */
  iconLabel: PropTypes.string,
  /**
   * Specifies if the Button should be optimized for a icon-only layout
   */
  isIconOnly: PropTypes.bool,
  /**
   * Specifies the kind of Button element that is render
   */
  kind: PropTypes.oneOf(Object.keys(ButtonKind)).isRequired,
  /**
   * Specifies the amount of border radius added to the Button element
   */
  rounded: PropTypes.oneOf(Object.keys(ButtonRadius)),
  /**
   * Specifies the height of the Button element.
   */
  size: PropTypes.oneOf(Object.keys(ButtonSize)),
  /**
   * Specifies the CSS 'text-transform' property of the button element determining the casing of the 'labelText' attribute
   */
  uppercase: PropTypes.bool,
  /**
   * Specifies the color scheme of Button element that is render
   */
  variant: PropTypes.oneOf(Object.keys(ButtonVariant)),
};

// re-enable after all props expressed in proptypes?
Button.defaultProps = {
  disabled: false,
  kind: "SOLID",
  rounded: "SQUARE",
  size: "SMALL",
  uppercase: false,
  variant: "PRIMARY",
};
