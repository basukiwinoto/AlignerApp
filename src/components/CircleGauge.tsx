import React from 'react';
import Svg, {Circle, Text} from 'react-native-svg';

const CircleGauge = (props: {percent: number}) => {
  const {percent} = props;
  const circumference = Math.round(3.14 * 2 * 35);
  const dashLength = Math.round((percent * circumference) / 100);
  return (
    <Svg height="100" width="100">
      <Circle
        cx="50"
        cy="50"
        r="35"
        stroke="purple"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={[dashLength, circumference - dashLength]}
        strokeDashoffset={circumference / 4}
      />
      <Text
        x="47"
        y="55"
        fontSize="20"
        fontWeight="bold"
        textAnchor="middle"
        fill="purple">
        {percent}%
      </Text>
    </Svg>
  );
};

export default CircleGauge;
