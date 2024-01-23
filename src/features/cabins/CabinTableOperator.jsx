import React from "react";
import TableOperations from "../../ui/TableOperations";
import { Filter } from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOperator = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            lable: "All",
          },
          {
            value: "no-discount",
            lable: "No Discount",
          },
          {
            value: "with-discount",
            lable: "With Discount",
          },
        ]}
      ></Filter>
      <SortBy
        options={[
          {
            value: "description-asc",
            lable: "Sort by name (A-Z)",
          },
          {
            value: "description-desc",
            lable: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            lable: "Sort by price (low first)",
          },
          {
            value: "regularPrice-desc",
            lable: "Sort by price (high first)",
          },
          {
            value: "maxCapacity-asc",
            lable: "Sort by Capacity (low first)",
          },
          {
            value: "maxCapacity-desc",
            lable: "Sort by Capacity (high first)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
};

export default CabinTableOperator;
