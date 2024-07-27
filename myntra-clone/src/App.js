import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bag from "./components/Bag";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Fetchitems from "./components/Fetchitems";
import { useSelector } from "react-redux";
import Loder from "./components/Loder";

const App = () => {
  const fetchStetus = useSelector((store) => store.fetchStetus);
  return (
    <>
      <Header></Header>
      <Fetchitems></Fetchitems>
      {fetchStetus.currentFetching ? (
        <Loder />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />}></Route>
        </Routes>
      )}

      <Footer></Footer>
    </>
  );
};
export default App;
