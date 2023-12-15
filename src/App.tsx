import React from "react";
import "./styles/App.scss";
import Nav from "./components/Nav";
import Table from "./components/Table";
import ProductDetailsModal from "./components/ProductDetailsModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Table />
      <ProductDetailsModal />
      <ToastContainer />
    </div>
  );
}

export default App;
