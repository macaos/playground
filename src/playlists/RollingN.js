import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";

const RollingN = ({ size }) => {
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
RollingN.defaultProps = {
  size: "19px"
};
RollingN.propTypes = {
  size: PropTypes.string
};

const NumberList = props => {
  const html = [];
  const cssNum = css`
    text-align: center;
    border: 1px solid #99999900;
    font-size: ${props.size};
  `;
  for (let i = 0, len = 19; i <= len; i++) {
    // if (i > 9) i = i - 10;
    const num = i < 10 ? i : i - 10;
    console.log(num);
    html.push(<div className={cssNum}>{num}</div>);
  }
  return <div>{html}</div>;
};

export default RollingN;
