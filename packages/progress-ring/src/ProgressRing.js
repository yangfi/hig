import React from "react";
import PropTypes from "prop-types";

import ProgressRingDeterminateBehavior from "./behaviors/ProgressRingDeterminateBehavior";
import ProgressRingIndeterminateBehavior from "./behaviors/ProgressRingIndeterminateBehavior";
import ProgressRingPresenter from "./presenters/ProgressRingPresenter";
import { availableSizes, availableSurfaces } from "./constants";

const ProgressRing = (props) => {
  const { mask, percentComplete, size, stylesheet, surface, ...otherProps } =
    props;
  const ProgressRingBehavior =
    percentComplete === undefined
      ? ProgressRingIndeterminateBehavior
      : ProgressRingDeterminateBehavior;
  const behaviorProps =
    percentComplete === undefined ? {} : { percentComplete };

  return (
    <ProgressRingBehavior {...behaviorProps}>
      {({ innerRef, cssTransitionState }) => (
        <ProgressRingPresenter
          innerRef={innerRef}
          percentComplete={percentComplete}
          size={size}
          cssTransitionState={cssTransitionState}
          stylesheet={stylesheet}
          surface={surface}
          mask={mask}
          {...otherProps}
        />
      )}
    </ProgressRingBehavior>
  );
};

ProgressRing.propTypes = {
  /**
   * Specifies a background color
   * If both surface & mask are provided, the value of mask will be used
   */
  mask: PropTypes.string,
  /**
   * An integer from 0 to 100 representing the percent the delayed operation has completed.
   * If left blank or this prop is omitted you will have the indeterminate progress ring
   */
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * {xs, s, m, l, xl} the size of the progress indicator
   */
  size: PropTypes.oneOf(availableSizes),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Specifies the surface level for the background
   */
  surface: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(availableSurfaces),
  ]),
};

ProgressRing.defaultProps = {
  size: "m",
  surface: 100,
};

export default ProgressRing;
