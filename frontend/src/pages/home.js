import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Canvasmenu } from "../components/offcanvas";
import { Buttoncanvas } from "../components/buttoncanvas";

export const Home = () => {
    // Import store and actions from Context
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid p-0 text-center">
            <Canvasmenu />
            <Buttoncanvas/>

            <div className="w-100">
                <img className="img-fluid" src="http://newequip.cl/wp-content/uploads/2017/08/familia-rema-2-blanca-2-1.jpg" alt="promo"/>
            </div>
            <div className="d-flex flex-column aligns-items-center">
                <h1>Más vendidos</h1>
                <h4>Insumos para Taller</h4>
                <div className="row">
                    <div className="col-4">
                        <img width="100%" src="http://www.newequip.cl/wp-content/uploads/2018/07/adhesivo-camioneta.jpg" alt="foto"/>
                    </div>
                    <div className="col-4">
                        <img width="100%" src="http://www.newequip.cl/wp-content/uploads/2018/07/adhesivo-camioneta.jpg" alt="foto"/>

                    </div>
                    <div className="col-4">
                        <img width="100%" src="http://www.newequip.cl/wp-content/uploads/2018/07/adhesivo-camioneta.jpg" alt="foto"/>

                    </div>
                </div>
                <h4>Herramientas e insumos neumáticos</h4>
                <h4>Herramientas</h4>
                <h4>Equipos de taller</h4>
                <h4>Camaras y cubrecamaras</h4>
                <h4>Servicios</h4>
                <h4>Redes de aire</h4>
            </div>
        </div>
    );
};
