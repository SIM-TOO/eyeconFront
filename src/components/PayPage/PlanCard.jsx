import React, { useState } from "react";

const plans = [
  {
    title: "Basic",
    price: "￦25,000",
    features: ["5 Coins", "10 Shares", "Custom Domains"],
  },
  {
    title: "Premium",
    price: "￦75,000",
    features: ["15 Coins", "125 Shares", "Analytics"],
  },
  {
    title: "Pro",
    price: "￦150,000",
    features: ["30 Coins", "Unlimited", "Custom Brand"],
  },
];

const image1 = "https://i.ibb.co/pRDck3F/Feature.jpg";
const image2 = "https://i.ibb.co/b1xHdYc/icon.png";

function PlanCard() {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {plans.map((plan, index) => (

        <div className="col-span-2 p-4">
          <div
            key={index}
            className={`flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-2.5 p-2.5 rounded-lg border border-[#d9d9d9] ${hoveredBox === plan.title.toLowerCase() ? "hover:bg-[#15c3a7]" : ""
              }`}
            onMouseEnter={() => handleMouseEnter(plan.title.toLowerCase())}
            onMouseLeave={() => handleMouseEnter(null)}
          >
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 pt-1 rounded-lg border border-[#5d6a85]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left uppercase text-black">
                  {plan.title}
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">{plan.price}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
                    <img src={hoveredBox === plan.title.toLowerCase() ? image2 : image1} alt="Feature" border="0" />
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
                      {feature}
                    </p>
                  </div>
                ))}
                <button type="submit">보내기</button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlanCard;
