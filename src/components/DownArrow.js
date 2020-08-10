import * as React from "react";

export default function DownArrow(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill="white"
      viewBox="0 0 960 560"
      {...props}
    >
      <path d="M480 344.181L268.869 131.889c-15.756-15.859-41.3-15.859-57.054 0-15.754 15.857-15.754 41.57 0 57.431l237.632 238.937c8.395 8.451 19.562 12.254 30.553 11.698 10.993.556 22.159-3.247 30.555-11.698L748.186 189.32c15.756-15.86 15.756-41.571 0-57.431s-41.299-15.859-57.051 0L480 344.181z" />
    </svg>
  );
}
