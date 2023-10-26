import React from "react";
import Header from "./Header";
import PlanCard from "./payPage/PlanCard";
import PayImg from "./payPage/PayImg";

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
