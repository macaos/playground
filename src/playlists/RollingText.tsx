import React, { useRef, useState, useEffect } from "react";
import { css } from "emotion";
import { shuffle as _shuffle, forEach, concat } from "lodash";

const RollingText = ({
  size,
  letter,
  letterWidth,
  randomEffect,
  restrict
}: {
  size: string;
  letter: string;
  restrict: string[];
  letterWidth?: number;
  randomEffect?: boolean;
}) => {
  const ref: any = useRef(null);
  const [height, setHeight] = useState(0);
  const [dummyDisplay, setDummyDisplay] = useState("block");
  const cssWidth: string = letterWidth ? letterWidth + "px" : "auto";

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.clientHeight + 2);
      setTimeout(() => {
        setDummyDisplay("none");
      });
    }
  }, []);

  return (
    <div
      key={letter}
      className={css`
      label="dummydiv";
        font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        display: inline-block;
        font-weight: bold;
        font-size: ${size};
        width: ${cssWidth};
        height: ${height}px;
        overflow: hidden;
      `}
    >
      {/* // for calculate height */}
      <div ref={ref} className={styleNum(dummyDisplay)}>
        0
      </div>
      <CharacterList
        size={size}
        str={letter}
        calcHeight={height}
        restrict={restrict}
        randomEffect={randomEffect}
      />
    </div>
  );
};
RollingText.defaultProps = {
  num: 0,
  randomEffect: true
};

const CharacterList = ({
  size,
  str,
  calcHeight,
  restrict,
  randomEffect
}: {
  size: string;
  str: string;
  calcHeight: number;
  restrict: string[];
  randomEffect?: boolean;
}) => {
  // shuffle characters
  const shuffle: string[] = _shuffle(getCharacters(restrict));
  const idx: number = shuffle.indexOf(str); // get string index
  const html = [];
  for (let i = 0, len = shuffle.length - 1; i <= len; i++) {
    html.push(<div className={styleNum(size)}>{shuffle[i]}</div>);
  }
  return (
    <div
      className={css`
        transition: margin-top 1.7s cubic-bezier(0.7, 0.005, 0.275, 0.995);
        margin-top: ${idx * calcHeight * -1}px;
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

export default RollingText;

const getCharacters = (arr: string[]) => {
  let r: string[] = [];
  forEach(arr, (item, i) => {
    r = concat(r, characters[item]);
  });
  return r;
};
const characters: any = {
  upper: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ],
  lower: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ],
  number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  special_often: ["?", "'", "."],
  special_lazy: [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "{",
    "}",
    "[",
    "]",
    "'/",
    "~"
  ]
};
