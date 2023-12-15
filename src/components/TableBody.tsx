import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../global/redux-functionality";
import {
  setIsProductDetailsOpen,
  setSelectedProduct,
} from "../global/redux-functionality/slices/productsSlice";
import { Product } from "../global/types/redux/products";

type Props = {
  data: Product[];
};

function TableBody({ data }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleProduct = (product: Product) => {
    // TO SET A PRODUCT FOR THE MODAL VIEW
    dispatch(setSelectedProduct(product));

    // TO OPEN THE PRODUCT MODAL
    dispatch(setIsProductDetailsOpen(true));
  };

  return (
    <tbody>
      {data.map(({ id, product, serial, quantity, total }) => (
        <tr
          key={id}
          onClick={() =>
            handleProduct({ id, product, serial, quantity, total })
          }
        >
          <td className="id">{id}</td>
          <td className="status">
            <div className="status-box">Status</div>
          </td>
          <td className="quantity">{quantity}</td>
          <td className="product-name">
            <div>
              <p className="name">{product}</p>
              <p className="serial">
                {serial} <span> - Qty: {quantity}</span>
              </p>
            </div>
          </td>
          <td className="prices">${total}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
