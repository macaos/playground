import React from "react";
import { css } from "emotion";

const RollingNumber = ({ size }: { size: string }) => {
  return (
    <div
      className={css`
        font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        display: inline-block;
        font-weight: bold;
      `}
    >
      <NumberList size={size} />
    </div>
  );
};

const NumberList = props => {
  const html = [];
  const cssNum = css`
    text-align: center;
    border: 1px solid #99999900;
    font-size: ${props.size};
  `;
  for (let i = 0, len = 19; i <= len; i++) {
    const num = i < 10 ? i : i - 10;
    html.push(<div className={cssNum}>{num}</div>);
  }
  return <div>{html}</div>;
};

export default RollingNumber;
