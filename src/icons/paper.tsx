import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const Paper = React.forwardRef<SVGSVGElement, Props>(
  ({ size = 24, color = "#FCEA2B" }, ref) => {
    return (
      <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <polyline
            fill="#9B9B9A"
            stroke="none"
            points="56,48.8213 56,10.9583 15.0372,10.9583 15.0372,41.1106 15.0372,52.2652 54.4639,50.9166"
          />
          <polyline
            fill="#9B9B9A"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            points="56,48.8213 56,10.9583 16,10.9583 16,41.1106"
          />
          <polygon
            fill="#D0CFCE"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            points="47.9719,38.1494 13.8387,45.6521 14.6533,56.4415 45.8422,52.277 49.1154,51.84 53,51.3213"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            points="56,48.8213 56,10.9583 16,10.9583 16,41.1106"
          />
          <polygon
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            points="47.9719,38.1494 13.8387,45.6521 14.6533,56.4415 45.8422,52.277 49.1154,51.84 53,51.3213"
          />
          <line
            x1="20.6218"
            x2="36"
            y1="16"
            y2="16"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="20.6218"
            x2="51.6602"
            y1="21.328"
            y2="21.328"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="20.6218"
            x2="51.6602"
            y1="32.2205"
            y2="32.2205"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="20.6218"
            x2="33.3927"
            y1="37.6274"
            y2="37.6274"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="20.6218"
            x2="51.6602"
            y1="26.8137"
            y2="26.8137"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M56,48.3213c0,1.6569-1.3431,3-3,3"
          />
        </g>
      </svg>
    );
  }
);

Paper.displayName = "Paper";

export { Paper };
