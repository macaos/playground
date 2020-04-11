import React from "react";
import RollingNumber from "./RollingNumber";

const Pagination = ({
  currentPage,
  totalPages
}: {
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <div>
      <RollingNumber size="30px" letter="3" randomEffect={false} />
      <RollingNumber size="15px" letter="2" randomEffect={false} />
      <RollingNumber size="15px" letter="0" randomEffect={false} />
    </div>
  );
};

export default Pagination;
