import React, { useEffect, useState } from "react";


function PlanCard() {
  const [isHovered, setIsHovered] = useState(false);
  const image1 = "https://i.ibb.co/pRDck3F/Feature.jpg"; // 초록색 체크표시
  const image2 = "https://i.ibb.co/b1xHdYc/icon.png"; // 흰색 체크표시
  const [changeimg, setChangeimg] = useState(image1);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    setChangeimg(isHovered ? image1 : image2);
  }, [isHovered]);

  const Event = (e) => {
    e.currentTarget.classList.toggle("hover:bg-[#15c3a7]");
  }
  const handleMouseEnter = (e) => {
    Event(e);
    handleHover();
  };

  return (

    // PlanCard 전체부분
    <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">

      {/* BASIC 시작 부분 */}
      {/* ↓↓↓ 마우스 올렸을때 호버 배경색 변경되는 이벤트 ↓↓↓ */}
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] 
      overflow-hidden gap-2.5 p-2.5 rounded-lg border border-[#d9d9d9]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 pt-1 rounded-lg border border-[#5d6a85]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left uppercase text-black">
              Basic
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">￦25,000</p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              5 Coins
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              10 Shares
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              Custom Domains
            </p>
          </div>
        </div>
      </div>



      {/* Premium 시작부분 */}
      {/* ↓↓↓ 마우스 올렸을때 호버 배경색 변경되는 이벤트 ↓↓↓ */}
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px]
      overflow-hidden gap-2.5 p-2.5 rounded-lg border border-[#d9d9d9] "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 pt-1 rounded-lg border border-[#5d6a85]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left uppercase text-black">
              Premium
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">￦75,000</p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              15 Coins
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              125 Shares
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              Analytics
            </p>
          </div>
        </div>
      </div>


      {/* Pro 부분 */}
      {/* ↓↓↓ 마우스 올렸을때 호버 배경색 변경되는 이벤트 ↓↓↓ */}
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] 
      overflow-hidden gap-2.5 p-2.5 rounded-lg bg-white border border-[#d9d9d9]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 pt-1 rounded-lg border border-[#5d6a85]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left uppercase text-black">
              Pro
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">￦150,000</p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              30 Coins
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
              Unlimited
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[38px] relative gap-2.5">
            <img src={changeimg} alt="Feature" border="0" />
            <p className="flex-grow-0 flex-shrink-0 w-[156px] text-xl font-semibold text-left text-black">
              Custom Brand
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};



export default PlanCard