import React, { ReactElement } from "react";
import RollingNumber from "./RollingNumber";
import { forEach } from "lodash";
import { css } from "emotion";

const Pagination = ({
  currentPage,
  totalPages
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const RollingNumbers: ReactElement[] = [];
  forEach(totalPages + "", (item, i) => {
    RollingNumbers.push(
      <RollingNumber size="12px" letter={item} randomEffect={false} />
    );
  });
  return (
    <div
      className={css`
        label: pagination-wrapper;
        width: 30px;
        border: 1px solid #99999900;
        display: inline-block;
      `}
    >
      <RollingNumber
        size="30px"
        letter={currentPage + ""}
        randomEffect={false}
      />
      <div
        className={css`
          label: diagonal-line;
          position: relative;
          z-index: 1;
          width: 30px;
          margin-top: -10px;
          left: 0px;
          height: 1px;
          background-color: #000;
          transform: rotate(-55deg);
        `}
      ></div>
      <div
        className={css`
          label: total-num;
          margin-top: 4px;
          margin-left: 10px;
        `}
      >
        {RollingNumbers}
      </div>
    </div>
  );
};

export default Pagination;
