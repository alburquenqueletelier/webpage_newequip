import React from "react";

export const Beforecard = (props) => {

    return (
        <div class="card">
            <img src={props.image} class="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <h5 class="card-title">{props.title}</h5>
                </div>
        </div>
    )
}