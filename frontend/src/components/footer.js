import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const [fixPosition, setFixPosition] = useState(false);
    let location = useLocation();

    // Fix the footer to the end of the document or the view port
    // when changing the class (see <footer .../>)
    useEffect(() => {
        if (window.innerHeight > document.querySelector('body').offsetHeight) {
            setFixPosition(true);
        } else {
            setFixPosition(false);
        }
    }, [[], location]);

    return (
        <footer className={fixPosition ? "pb-1 fixed-bottom bg-secondary" : "pb-1 bg-secondary"}>
            <div className="row justify-content-around">
                {/* Paul Lacrampe */}
                <div className="col-auto">
                    <p className="mb-0 text-center">Ventas</p>
                    <ul>
                        <li>

                            Paul Lacrampe - 950944263
                            <a href="https://wa.me/56950944263" rel="noopener noreferrer" className="btn" target="_blank">
                                <img width="25px" className="mb-1" src="https://cdn-icons-png.flaticon.com/512/2504/2504957.png"
                                    alt="logo-whatsapp" />
                            </a>
                            <p>placrampe@newequip.cl</p>
                        </li>
                        <li>
                            Veronica Galaz - 949372885
                            <a href="https://wa.me/56949372885" rel="noopener noreferrer" className="btn " target="_blank">
                                <img width="25px" className="mb-1" src="https://cdn-icons-png.flaticon.com/512/2504/2504957.png"
                                    alt="logo-whatsapp" />
                            </a>
                            <p>vgalaz@newequip.cl</p>
                        </li>
                    </ul>
                </div>
                {/* Veronica Galaz */}
                <div className="col-auto">
                    <p >Horario de Atención</p>
                    <p className="mb-0">Lunes a viernes</p>
                    <p>8:30am - 18:00pm</p>
                </div>
                <div className="col-auto">
                    <p className="mb-0">Siguenos</p>
                    <a href="https://www.facebook.com/Newequip" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px"
                            src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/newequipchile/" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px"
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            alt="https://www.instagram.com/baal_sw/?hl=en" />
                    </a>
                </div>
                <div className="col-auto">
                    <p>Información de Contacto</p>
                    <p className="mb-0">Avenida Ventisquero 1111 - Bodega 28, Renca</p>
                    <p className="mb-0">Consultas: 945374044 <img width="25px" src="https://cdn-icons-png.flaticon.com/512/2504/2504957.png" alt="whatsapp"/></p>

                </div>
            </div>
        </footer >
    );
};