import React from "react";
import "./styles/App.scss";
import Nav from "./components/Nav";
import Table from "./components/Table";
import ProductDetailsModal from "./components/ProductDetailsModal";

function App() {
  return (
    <div className="App">
      <Nav />
      <Table />
      <ProductDetailsModal />
    </div>
  );
}

export default App;
