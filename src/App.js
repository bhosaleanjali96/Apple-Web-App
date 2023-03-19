import React, { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Home from './Components/Home/Home';
import Cards from "./Components/Cards/Cards";
import Carousel from "./Components/Carousel/Carousel"
import Footer from "./Components/Footer/Footer"
import Video from "./Components/Video/Video";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Video/>
      <Cards/>
      <Carousel/>
      <Footer/>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-content-center">
            <div
              className="spinner-border text-dark mx-auto my-auto"
              role="status"
            >
              {" "}
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          </div>
        }
      >
        <Routes>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
