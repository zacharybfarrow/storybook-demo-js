import Icon, { IconSizes } from "./Icon";
import { ICONS } from "./Icon";

// Metadata
export default {
  title: "Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      options: Object.keys(ICONS),
    },
    fill: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    size: {
      options: Object.keys(IconSizes),
    },
  },
};

export const Default = {
  args: {
    name: "E1X_ico_font-19",
  },
};

export const WithTooltip = {
  args: {
    name: "E1X_ico_font-19",
    title: "Email",
    titleId: "iconTitle",
    tooltip: true,
  },
};

export const BackgroundColor = {
  args: {
    name: "E1X_ico_font-188",
    backgroundColor: "#16a34a",
    borderRadius: "30px",
    fill: "white",
  },
};
