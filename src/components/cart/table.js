import React from "react";
import TableCart from "./tableCart";

function Table() {
  return (
    <table className="table cart-table">
      <tbody>
        <TableCart product={2} />
      </tbody>
    </table>
  );
}

export default Table;
