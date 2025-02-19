import React from "react";
import PropTypes from "prop-types";
import Surface from "@hig/surface";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

const BelowTopNav = (props) => {
  const {
    children,
    onMouseLeave,
    onMouseEnter,
    stylesheet: customStylesheet,
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <Surface
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={
            stylesheet(
              { stylesheet: customStylesheet, ...props },
              resolvedRoles
            ).belowTop
          }
        >
          {children}
        </Surface>
      )}
    </ThemeContext.Consumer>
  );
};

BelowTopNav.displayName = "BelowTopNav";

BelowTopNav.propTypes = {
  /** A SideNav element */
  children: PropTypes.node,
  /** Called when beginning to hover over the container */
  onMouseEnter: PropTypes.func,
  /** Called when no longer hovering over the container */
  onMouseLeave: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

export default BelowTopNav;
