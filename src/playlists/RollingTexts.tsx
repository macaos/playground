import React, { ReactElement, useState } from "react";
import RollingText from "./RollingText";
import { forEach } from "lodash";

const RollingTexts = ({
  size,
  randomEffect,
  price
}: {
  size: string;
  price: string;
  randomEffect?: boolean;
}) => {
  const RollingTextList: ReactElement[] = [];
  forEach(price, (item, i) => {
    RollingTextList.push(
      <RollingText size={size} letter={item} randomEffect={randomEffect} />
    );
  });
  return <>{RollingTextList}</>;
};

export default RollingTexts;
