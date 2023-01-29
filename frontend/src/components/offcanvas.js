import React from "react";

export const Canvasmenu = () => {

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Categorías</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul>
                    <li>Insumos para taller</li>
                    <li>Herramientas e insumos neumáticos</li>
                    <li>Herramientas</li>
                    <li>Equipos de taller</li>
                    <li>Camaras y cubrecamaras</li>
                    <li>Servicios</li>
                    <li>Redes de aire</li>
                </ul>
            </div>
        </div>
    )

};