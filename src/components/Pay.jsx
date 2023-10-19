import React from "react";
import Header from "./Header";
import PlanCard from "./payPage/PlanCard";
import PayImg from "./payPage/PayImg";

function Pay() {

    
    return (
        <div>
        <div>
            <Header></Header>
        </div>
        <div>
            <PayImg></PayImg>
        </div>
        <div>
            <PlanCard></PlanCard>
        </div>
        </div>
    );

}

export default Pay