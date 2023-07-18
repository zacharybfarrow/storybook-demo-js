import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import { ICONS } from "../Icon/Icon";

// Metadata
export default {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
    },
    kind: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(ICONS),
    },
  },
};

// Stories

export const Solid = {
  args: {
    kind: "SOLID",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  },
};

export const Outline = {
  args: {
    kind: "OUTLINE",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};

export const Ghost = {
  args: {
    kind: "GHOST",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};

export const Tinted = {
  args: {
    kind: "TINTED",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};
