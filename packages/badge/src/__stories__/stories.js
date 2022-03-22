import React from "react";
import { Checkmark16 } from "@hig/icons";

export default [
  {
    description: "default",
    getProps: () => ({
      customColors: {
        backgroundColor: "blue",
        fontColor: "grey",
        iconColor: "purple"
      },
      icon: <Checkmark16 />
    })
  }
];
