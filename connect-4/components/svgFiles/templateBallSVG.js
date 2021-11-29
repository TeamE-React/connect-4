import React from "react";
import { Config } from "../../config";

const TemplateBallSVG = ({ color }) => {

  return (
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="100"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="100"
          r="95"
          fill={Config.ballColor[color].circle2}
        />
        <circle
          cx="100"
          cy="96"
          r="90"
          fill={Config.ballColor[color].circle3}
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          fill={Config.ballColor[color].circle1}
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill={Config.ballColor[color].circle2}
        />
        <circle
          cx="100"
          cy="97"
          r="75"
          fill={Config.ballColor[color].circle3}
        />
        <circle
          cx="100"
          cy="95"
          r="70"
          fill={Config.ballColor[color].circle4}
        />
        <circle
          cx="100"
          cy="90"
          r="60"
          fill={Config.ballColor[color].circle5}
        />
      </svg>
  );
}
export default TemplateBallSVG;


{/* <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="100"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="96"
          r="90"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="97"
          r="75"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="95"
          r="70"
          fill="#920000"
        />
        <circle
          cx="100"
          cy="90"
          r="60"
          fill="#920000"
        />
      </svg> */}