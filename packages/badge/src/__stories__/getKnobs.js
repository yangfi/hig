import { object, select, text } from "@storybook/addon-knobs/react";

import {
  AVAILABLE_COLORS,
  AVAILABLE_SIZES,
  AVAILABLE_VARIANTS
} from "../constants";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  color: "Color",
  customColors: "Custom Colors Object",
  label: "Label",
  size: "Size",
  variant: "Variant"
};

export default function getKnobs(props) {
  const { customColors } = props;

  return {
    ...props,
    color: select(
      knobLabels.color,
      AVAILABLE_COLORS,
      "green",
      knobGroupIds.basic
    ),
    size: select(knobLabels.size, AVAILABLE_SIZES, "m", knobGroupIds.basic),
    variant: select(
      knobLabels.variant,
      AVAILABLE_VARIANTS,
      "dot",
      knobGroupIds.basic
    ),
    label: text(knobLabels.label, "badge", knobGroupIds.basic),
    customColors: object(
      knobLabels.customColors,
      customColors,
      knobGroupIds.basic
    )
  };
}
