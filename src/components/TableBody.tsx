import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../global/redux-functionality";
import { setIsProductDetailsOpen } from "../global/redux-functionality/slices/productsSlice";

type Props = {};

function TableBody({}: Props) {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleProduct = () => {
    dispatch(setIsProductDetailsOpen(true));

    console.log("Clicked");
  };

  return (
    <tbody>
      {products.map(({ id, product, serial, quantity, total }) => (
        <tr key={id} onClick={() => handleProduct()}>
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
