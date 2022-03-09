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
      width="35.762"
      height="24.88"
      viewBox="0 0 35.762 24.88">
      <Path
        id="cross-symbol"
        d="M12.44,0a12.44,12.44,0,1,1,0,24.88c-3.586,0-9.783-1.518-15.172-4.082-4.391-2.087-8.15-5.074-8.15-8.358C-10.882,5.57,5.57,0,12.44,0ZM15.1,7.451c.352-.358.573-.644,1.012-.2L17.53,8.692c.464.458.439.725,0,1.152l-2.683,2.675L17.429,15.1c.358.352.644.573.2,1.012L16.188,17.53c-.458.464-.725.439-1.15,0l-2.6-2.6L9.846,17.52c-.425.435-.692.46-1.15,0L7.253,16.1c-.445-.435-.16-.656.2-1.012l2.577-2.571L7.36,9.848c-.435-.427-.46-.694,0-1.152L8.777,7.253c.435-.445.656-.16,1.012.2l2.65,2.656Z"
        transform="translate(10.882)"
        fill-rule="evenodd"
      />
    </Svg>
  );
}
