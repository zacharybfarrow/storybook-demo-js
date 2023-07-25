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
    title: "accessibility title",
    titleId: "accessibleTitle",
  },
};

export const Accessibility = {
  args: {
    name: "E1X_ico_font-19",
    title: "The title prop controls the content of the tooltip",
    titleId: "iconTitle",
    desc: "text describing the email icon",
    descId: "iconDesc",
    tooltip: true,
  },
};

export const Color = {
  render: () => {
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Icon
          name="E1X_ico_font-43"
          backgroundColor="#16a34a"
          borderRadius="15px"
          fill="white"
          title="Color is set using the fill and/or backgroundColor props"
          titleId="iconTooltip"
          tooltip
        />
        <Icon
          name="E1X_ico_font-50"
          fill="red"
          title="Background color is transparent by default"
          titleId="icon2Tooltip"
          tooltip
        />
      </div>
    );
  },
};

export const InText = {
  args: {
    name: "E1X_ico_font-01",
    size: "XS",
    title: "Help me!",
    titleId: "ariaLabel",
    tooltip: true,
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
          <br /> Simply place the Icon component inside of a block of text
          (span, paragraph, header, etc) and adjust the size prop to your
          liking. Note that, depending on your the structure of your page, you
          may need to apply display: flex and flex-direction: row to the parent
          element.
          <br /> In this example, there is a non-breaking space on either side
          of the icon.
        </span>
      </div>
    ),
  ],
};
