import React from "react";
import { useSelector } from "react-redux";

function Pay() {

    let test = useSelector((state) => {return state})

    return (
        <div>
            <p>가</p>
            <h1>Test</h1>
            <h2>믱</h2>
        </div>
    )
    
}

export default Pay