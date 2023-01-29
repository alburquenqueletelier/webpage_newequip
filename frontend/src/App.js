import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import pages
import { Home } from "./pages/home";

// Import components
import ScrollToTop from "./components/scrollToTop";
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";

// Import app context
import injectContext from "./store/appContext";

const App = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="container-fluid m-0 p-0">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar /> 
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<div className="text-center"><h1>404: Not found!</h1></div>} path="*" />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);
