import * as React from 'react';
import Svg, {
  Circle,
  Rect,
  Path,
  Ellipse,
  Defs,
  Stop,
  RadialGradient,
  G,
  Pattern,
  Image,
} from 'react-native-svg';

export default function AddLink() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18">
      <Path
        id="direction-top-right"
        d="M13.118,0,.135,4.387a.2.2,0,0,0-.124.253.194.194,0,0,0,.132.125h0L6.635,6.744l1.979,6.5h0a.194.194,0,0,0,.125.132.2.2,0,0,0,.253-.124L13.384.265A.2.2,0,0,0,13.118,0Z"
        transform="translate(0 0.018)"
        fill="#fff"
        opacity="0.9"
      />
    </Svg>
  );
}
