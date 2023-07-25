import Icon, { IconSizes } from "./Icon";
import { ICONS } from "./Icon";

// Metadata
export default {
  title: "Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      options: Object.keys(ICONS).sort(),
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
    borderRadius: "15px",
    fill: "white",
  },
};

export const InText = {
  args: {
    name: "Tru_icon-19",
    size: "XS",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          borderColor: "black",
          borderWidth: "5px",
          borderStyle: "double",
          boxShadow: "5px 5px 5px lightgrey",
          margin: "2em",
          borderRadius: "7px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5em",
            paddingRight: "5em",
            paddingTop: "2em",
          }}
        >
          This is an example of an Icon &nbsp;
          <Story />
          &nbsp; placed inside of a text element.
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5em",
            paddingRight: "5em",
            paddingBottom: "2em",
          }}
        >
          Simply place the Icon component inside of a block of text (span,
          paragraph, header, etc) and adjust the size prop to your liking. Note
          that, depending on your the structure of your page, you may need to
          apply display: flex and flex-direction: row to the parent element.
        </span>
      </div>
    ),
  ],
};
