import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const Rock = React.forwardRef<SVGSVGElement, Props>(
  ({ size = 24, color = "#FCEA2B" }, ref) => {
    return (
      <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <path
            fill="#d0cfce"
            d="M55.785,34.99a.9992.9992,0,0,1,.1055,1.041l-3.8946,8.0626a1.0021,1.0021,0,0,1-.706.5468L40.492,46.7783a1.007,1.007,0,0,1-.7939-.1806L16.2137,29.02a1.0007,1.0007,0,0,1-.1758-1.4316l2.4385-2.9971a.9981.9981,0,0,1,.3252-.2627l18.3057-9.2217a1.0147,1.0147,0,0,1,.6572-.0849l3.8193.8066a.9974.9974,0,0,1,.6367.4424l2.6731,4.144,1.6213,2.4905Z"
          />
          <polygon
            fill="#3f3f3f"
            points="26.692 56 46.788 56 40.317 45.819 16.943 28.219 15.814 33.046 26.692 56"
          />
          <polygon
            fill="#9b9b9a"
            points="54.78 36.031 56.128 47.544 54.469 56 46.788 56 40.317 45.819 50.939 43.94 54.78 36.031"
          />
        </g>
        <g id="line">
          <polyline
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            points="45.797 23.608 54.99 35.597 56.128 47.239 54.469 56 26.692 56 16 32.86 16.813 28.219 19.252 25.222 37.558 16 41.377 16.807 44.02 20.917 39.008 24.27"
          />
          <polyline
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            points="47.359 56 40.298 45.797 16.813 28.219"
          />
          <polyline
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            points="54.99 35.597 51.095 43.659 40.298 45.797"
          />
        </g>
      </svg>
    );
  }
);

Rock.displayName = "Rock";

export { Rock };
