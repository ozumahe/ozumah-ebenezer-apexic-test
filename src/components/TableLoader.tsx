import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";

type Props = {};

function TableLoader({}: Props) {
  return (
    <div className="loader">
      <SpinnerRoundOutlined color="#605DEC" />
    </div>
  );
}

export default TableLoader;
