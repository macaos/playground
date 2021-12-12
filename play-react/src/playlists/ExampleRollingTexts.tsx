import React, { useState } from "react";
import RollingTexts from "./RollingTexts";
import { css } from "emotion";

const ExampleRollingTexts = () => {
  const [dummyNum, setDummyNum] = useState("Hello I'm MACAO.");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDummyNum(e.target.value);
  };

  return (
    <>
      <div>
        <RollingTexts
          // restrict={['upper','lower','number','special_often','special_lazy']}
          restrict={["upper", "lower", "special_often"]}
          size="41px"
          letters={dummyNum}
        />
      </div>
      Test :{" "}
      <input
        className={css`
          border: 1px solid #999;
        `}
        type="text"
        value={dummyNum}
        onChange={onChange}
      ></input>
    </>
  );
};

export default ExampleRollingTexts;
