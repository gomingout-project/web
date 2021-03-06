import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const MyProfileIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 11.5C14.4853 11.5 16.5 9.48528 16.5 7C16.5 4.51472 14.4853 2.5 12 2.5C9.51472 2.5 7.5 4.51472 7.5 7C7.5 9.48528 9.51472 11.5 12 11.5Z" stroke="white" strokeMiterlimit="10"/>
      <path d="M21.5 18.5L15.5 13.5H8.5L2.5 18.5V21.5H21.5V18.5Z" stroke="white" strokeMiterlimit="10"/>
    </svg>
  </svg>
));

export default memo(MyProfileIcon);