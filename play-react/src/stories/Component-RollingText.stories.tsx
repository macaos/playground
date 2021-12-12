import React, { useState } from "react";
import RollingNumber from "../playlists/RollingNumber";
import RollingText from "../playlists/RollingText";
import ExampleRollingTexts from "../playlists/ExampleRollingTexts";

export default {
  title: "Component/RollingText",
  component: RollingNumber
};

export const basic = () => <RollingText size="29px" letter="M" />;
export const rollingTexts = () => <ExampleRollingTexts />;
