import React, { useState } from "react";
import RollingNumber from "../playlists/RollingNumber";
// import Pagination from "../playlists/Pagination";
import RollingPrice from "../playlists/RollingPrice";
import { css } from "emotion";
import ExampleRollingPrice from "../playlists/ExampleRollingPrice";

export default {
  title: "Component/RollingNumber",
  component: RollingNumber
};

export const basic = () => <RollingNumber size="29px" letter="7" />;

// export const pagenation = () => <Pagination />;
export const rollingPrice = () => <ExampleRollingPrice />;
