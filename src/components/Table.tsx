import React, { useEffect } from "react";
import "../styles/table.scss";
import TableBody from "./TableBody";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../global/redux-functionality";
import { getProducts } from "../global/redux-functionality/slices/productsSlice";

type Props = {};

function Table({}: Props) {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="table-container">
      <div className="table-header">
        <p className="title">Products</p>
        <p className="result-count">10 of {products.length} results</p>
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

        <TableBody data={products} />
      </table>
    </div>
  );
}

export default Table;
