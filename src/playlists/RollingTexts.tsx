import React, { ReactElement, useState, useEffect, useRef } from "react";
import RollingText from "./RollingText";
import { forEach } from "lodash";
import { css } from "emotion";

const RollingTexts = ({
  size,
  randomEffect,
  letters
}: {
  size: string;
  letters: string;
  randomEffect?: boolean;
}) => {
  const RollingTextList: ReactElement[] = [];
  const [isCalcLeft, setCalcLeft] = useState(false);
  // Guide : get letter spacing for text
  const guideRefs: any[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    setTimeout(() => {
      setCalcLeft(true);
    }, 2000);
  }, []);

  forEach(letters, (item, i) => {
    const ref = guideRefs[i];
    const letterWidth = ref && ref.current ? ref.current.offsetWidth : 20;
    RollingTextList.push(
      <RollingText
        size={size}
        letterWidth={letterWidth}
        letter={item}
        randomEffect={randomEffect}
      />
    );
  });

  const GuideTextList: ReactElement[] = [];
  for (let i = 0, len = letters.length; i < len; i++) {
    const item = letters[i];
    // guideRefs[i] = useRef(null);
    GuideTextList.push(
      <span
        ref={guideRefs[i]}
        className={css`
          font-size: ${size};
          font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          font-weight: bold;
        `}
      >
        {item}
      </span>
    );
  }

  return (
    <>
      {isCalcLeft && RollingTextList}
      <div>{GuideTextList}</div>
    </>
  );
};

export default RollingTexts;
