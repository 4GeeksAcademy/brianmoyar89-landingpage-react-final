//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import TarjetaUno from "./component/TarjetaUno.jsx";
import CuatroTarjetas from "./component/CuatroTarjetas.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.render(
    <div>
        <Home />
        <TarjetaUno />
        <CuatroTarjetas />
        <Footer />
    </div>,
    document.querySelector("#app")
);
