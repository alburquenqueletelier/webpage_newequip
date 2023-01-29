import React from "react";
import * as bootstrap from 'bootstrap/dist/js/bootstrap';

export const Buttoncanvas = ()=>{

    const handleMenu = ()=>{
        const menu = new bootstrap.Offcanvas(document.querySelector('#offcanvasScrolling')); //eslint-disable-line
        menu.toggle();
    };
// offcanvasScrolling
    return(
        <button
        onMouseOver={handleMenu}
        className="btn btn-primary" 
        type="button"
        style={{
            width: "2rem",
            height: "auto",
            position: "sticky",
            top: "12rem",
            display: "flex",
            flexDirection: "column",
            float: "left"
        }}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        >
            <p className="mb-0 p-0">C</p>
            <p className="mb-0 p-0">A</p>
            <p className="mb-0 p-0">T</p>
            <p className="mb-0 p-0">E</p>
            <p className="mb-0 p-0">G</p>
            <p className="mb-0 p-0">O</p>
            <p className="mb-0 p-0">R</p>
            <p className="mb-0 p-0">I</p>
            <p className="mb-0 p-0">A</p>
            <p className="mb-0 p-0">S</p>
        </button>
    )
};