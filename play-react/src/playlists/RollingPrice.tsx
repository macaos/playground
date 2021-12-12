import React, { ReactElement, useState } from "react";
import RollingNumber from "./RollingNumber";
import { forEach } from "lodash";

const RollingPrice = ({
  size,
  randomEffect,
  price
}: {
  size: string;
  price: string;
  randomEffect?: boolean;
}) => {
  const RollingNumbers: ReactElement[] = [];
  forEach(price, (item, i) => {
    RollingNumbers.push(
      <RollingNumber size={size} letter={item} randomEffect={randomEffect} />
    );
  });
  return <>{RollingNumbers}</>;
};

export default RollingPrice;
