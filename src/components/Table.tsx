import React, { useEffect } from "react";
import "../styles/table.scss";
import TableBody from "./TableBody";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../global/redux-functionality";
import { getProducts } from "../global/redux-functionality/slices/productsSlice";
import { SpinnerRoundOutlined } from "spinners-react";
import { DownIcon } from "./SVGS";

type Props = {};

function Table({}: Props) {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="table-container">
      {loading ? (
        <div className="loader">
          <SpinnerRoundOutlined color="#605DEC" />
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <>
              <div className="table-header">
                <p className="title">Products</p>
                <p className="result-count">
                  {products.length} of {10} results
                </p>

                <button
                  onClick={() => dispatch(getProducts())}
                  className="reset"
                >
                  Reset
                </button>
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
                    <th className="prices">
                      <p>Prices</p>
                      <DownIcon />
                    </th>
                  </tr>
                </thead>

                <TableBody data={products} />
              </table>
            </>
          ) : (
            <div className="loader">
              <p>No Product Found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Table;
