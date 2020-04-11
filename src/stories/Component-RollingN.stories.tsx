import React, { useState } from "react";
import RollingNumber from "../playlists/RollingNumber";
import Pagination from "../playlists/Pagination";
import RollingPrice from "../playlists/RollingPrice";
import { css } from "emotion";

export default {
  title: "Component/RollingNumber",
  component: RollingNumber
};

export const basic = () => <RollingNumber size="29px" letter="7" />;

// export const pagenation = () => <Pagination />;
export const rollingPrice = () => {
  const [dummyNum, setDummyNum] = useState("14223,332.54");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDummyNum(e.target.value);
  return (
    <>
      <div>
        <RollingPrice size="41px" price="1123" />
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
