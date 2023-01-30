import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Aftercard = (props) => {
    const { store, actions } = useContext(Context);
    var amount = 1;

    const changeAmount = ()=>{
        console.log(amount);
    };
    
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={props.image} width="100%" alt="..." />

                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    <div className="card-body justify-content-around align-items-center align-items-md-stretch d-flex flex-column">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="d-flex flex-column justify-content-lg-around align-items-baseline">
                            <p className="card-text"><strong className="text-danger">Valor: </strong> {actions.valueToPrice(1, props.price ? props.price : 1000)}</p>
                            <p className="card-text text-center"><button className="btn btn-outline-danger" onClick={() => changeAmount(amount - 1)}>-</button><span className="counter">{amount}</span><button className="btn btn-outline-primary" onClick={() => changeAmount(amount + 1)}>+</button></p>
                            <p className="card-text"><strong className="text-danger">Total: </strong> {actions.valueToPrice(amount, props.price ? props.price : 1000)}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger">Quitar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}