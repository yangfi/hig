import React from 'react';
import Badge, {AVAILABLE_COLORS, AVAILABLE_SIZES, AVAILABLE_VARIANTS } from '@hig/badge';
import Spacer from '@hig/spacer';
import Typography from '@hig/typography';
import { Link16 } from '@hig/icons';

import ThemeRepeater from '../components/ThemeRepeater';

const Size12Icon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25C3.10051 11.25 0.75 8.8995 0.75 6ZM2.895 6.8625L5.3475 8.925L9.0975 4.0725L8.25 3.42L5.1825 7.3875L3.585 6.0375L2.895 6.8625Z" fill="black"/>
  </svg>
);

const sizeLabel = {
  s: "small",
  l: "large"
}

function ButtonsPage() {
  return (
    <ThemeRepeater>
      {() => {
        return (
          <div>
            {AVAILABLE_COLORS.map(color => {
              const colorProps = color === "custom" ?
                { backgroundColor: "purple",
                  fontColor: "white",
                  iconColor: "yellow"
                } :
                {}
              return AVAILABLE_SIZES.map(size => {
                return AVAILABLE_VARIANTS.map(variant => {
                  const badgeProps = {}
                  switch (variant) {
                    case "icon":
                      badgeProps.icon = size === 's' ? <Size12Icon /> : <Link16 />;
                      break;
                    case "text":
                      badgeProps.label = color;
                      break;
                  }
                  if (size === 's' && variant === 'text') {
                    return null;
                  } else {
                    return (
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px'}}>
                        <Typography>{`${sizeLabel[size]} ${color} ${variant} variant`}</Typography>
                        <Spacer spacing='xl' />
                        <Badge color={color} variant={variant} size={size} customColors={colorProps} {...badgeProps} />
                        <Spacer spacing='l' />
                      </div>
                    );
                  }
                })
              })
            })}
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default ButtonsPage;
