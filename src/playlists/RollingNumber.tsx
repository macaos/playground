import React, { useRef, useState, useEffect } from "react";
import { css } from "emotion";

const RollingNumber = ({
  size,
  letter,
  randomEffect
}: {
  size: string;
  letter: string;
  randomEffect?: boolean;
}) => {
  const ref: any = useRef(null);
  const [height, setHeight] = useState(0);
  const [dummyDisplay, setDummyDisplay] = useState("block");
  let printNum: number = -1;
  let printStr: string = "";
  if (/[^0-9]/g.test(letter)) {
    // string
    printStr = letter;
  } else {
    // number
    printNum = Number(letter);
  }
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
      if (printNum >= 0) {
        if (randomEffect) {
          // odd
          return printNum + 10 * parseInt(Math.random() * 2 + "");
        }
        return printNum;
      }
      return 0;
    })();

  return (
    <div
      className={css`
      label="dummydiv";
        font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        display: inline-block;
        font-weight: bold;
        font-size: ${size};
        height: ${height}px;
        overflow: hidden;
      `}
    >
      <div ref={ref} className={styleNum(dummyDisplay)}>
        0
      </div>

      {printNum >= 0 && (
        <NumberList
          size={size}
          movNum={calcMovNum}
          randomEffect={randomEffect}
        />
      )}
      {printStr !== "" && printStr}
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
  randomEffect?: boolean;
}) => {
  const html = [];
  for (let i = 0, len = 19; i <= len; i++) {
    const num = i < 10 ? i : i - 10;
    html.push(<div className={styleNum(size)}>{num}</div>);
  }
  return (
    <div
      className={css`
        transition: margin-top 1.7s cubic-bezier(0.7, 0.005, 0.275, 0.995);
        margin-top: ${movNum * -1}px;
      `}
    >
      {html}
    </div>
  );
};

// For calculating rolling height (hide after calculation)
const styleNum = (display: string = "block") => {
  return css`
    display: ${display};
    text-align: center;
    border: 1px solid #99999900;
  `;
};

export default RollingNumber;
