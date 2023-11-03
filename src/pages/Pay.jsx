import React from "react";
import Header from "../components/Header";
import PlanCard from "../components/payPage/PlanCard";
import PayImg from "../components/payPage/PayImg";

function Pay() {
  return (
    <div className="dark:bg-gray-800">

      <Header></Header>
      <PayImg></PayImg>
      <PlanCard></PlanCard>

    </div>
  );
}

export default Pay;
