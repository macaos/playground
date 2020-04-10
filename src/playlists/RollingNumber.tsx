import React, { useRef, useState, useEffect, RefObject } from "react";
import { css } from "emotion";

const RollingNumber = ({
  size,
  num,
  randomEffect
}: {
  size: string;
  num: number;
  randomEffect: boolean;
}) => {
  const ref: any = useRef(null);
  const [height, setHeight] = useState(0);
  const [dummyAlpha, setDummyAlpha] = useState("1");
  const [dummyDisplay, setDummyDisplay] = useState("block");
  useEffect(() => {
    if (ref) {
      setHeight(ref.current.clientHeight + 2);
      setTimeout(() => {
        setDummyDisplay("none");
      });
    }
  }, []);
  const calcMovNum: number =
    height *
    (() => {
      if (randomEffect) {
        // odd
        return num + 10 * parseInt(Math.random() * 2 + "");
      }
      return num;
    })();

  return (
    <div
      className={css`
      label="dummydiv";
        font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        display: inline-block;
        font-weight: bold;
        height: ${height}px;
        overflow: hidden;
      `}
    >
      <div ref={ref} className={styleNum(size, dummyDisplay, dummyAlpha)}>
        0
      </div>
      <NumberList size={size} movNum={calcMovNum} randomEffect={randomEffect} />
    </div>
  );
};
RollingNumber.defaultProps = {
  num: 0,
  randomEffect: true
};

const NumberList = ({
  size,
  movNum,
  randomEffect
}: {
  size: string;
  movNum: number;
  randomEffect: boolean;
}) => {
  const html = [];
  for (let i = 0, len = 19; i <= len; i++) {
    const num = i < 10 ? i : i - 10;
    html.push(<div className={styleNum(size)}>{num}</div>);
  }
  return (
    <div
      className={css`
        transition: margin-top 0.7s ease-in-out;
        margin-top: ${movNum * -1}px;
      `}
    >
      {html}
    </div>
  );
};

const styleNum = (
  size: string,
  display: string = "block",
  opacity: string = "1"
) => {
  return css`
    display: ${display};
    text-align: center;
    border: 1px solid #999999;
    font-size: ${size};
    opacity: ${opacity};
  `;
};

export default RollingNumber;
