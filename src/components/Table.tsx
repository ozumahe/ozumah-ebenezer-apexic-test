import React from "react";
import "../styles/table.scss";
import TableBody from "./TableBody";

type Props = {};

function Table({}: Props) {
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="title">Products</p>
        <p className="result-count">10 of 64 results</p>
      </div>
      <table>
        <thead>
          <tr>
            <th className="id">ID</th>
            <th className="status">Status</th>
            <th className="quantity">Quantity</th>
            <th className="product-name">
              <div>Product name</div>
            </th>
            <th className="prices">Prices</th>
          </tr>
        </thead>

        <TableBody />
      </table>
    </div>
  );
}

export default Table;
