import React, { useState } from "react";
import RollingPrice from "./RollingPrice";
import { css } from "emotion";

const ExampleRollingPrice = () => {
  const [dummyNum, setDummyNum] = useState("14223,332.54");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDummyNum(e.target.value);
  return (
    <>
      <div>
        <RollingPrice size="41px" price={dummyNum} />
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

export default ExampleRollingPrice;
