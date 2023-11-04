import React from "react"
import { Link } from "react-router-dom";
import useRemoveCoin from "../../hook/mainPage/useRemoveCoin";
import Swal from 'sweetalert2';

const C02Pay = ({ handleButtonClick }) => {

  const storedCoins = localStorage.getItem('coinsData');
  const coins = JSON.parse(storedCoins);
  const coinValue = coins

  // removeCoin 함수를 가져옵니다.
  const removeCoin = useRemoveCoin();

  // 코인 차감 함수
  const modifiedHandleButtonClick = async (value) => {
    if (coinValue > 0) {
      // 현재 코인 반환
      await removeCoin();
      console.log("차감완료")
      handleButtonClick(value);
    } else {
      console.log("코인 부족")
      Swal.fire({
        icon: 'warning',
        title: '코인 부족',
        text: '코인이 부족합니다. 충전 후 이용해주세요.',
      });
    }
  };


  return (
    <div className="font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl md:h-[100%]">

      {/* 여백용 박스 */}
      <div className="col-span-12 p-3" />
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 잔여 코인 확인 박스 */}
      <div className="rounded-[10px] col-span-12 h-full md:col-span-5 grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]">
        {/* 잔여코인 확인 */}
        <p className="col-span-12 text-2xl font-bold text-left text-[#505050]  p-3 text-center">
          <img src="https://i.ibb.co/CbxhQmw/icon-check-circle-1.png" alt="" className="animate-pulse w-8 inline-block mr-2" />
          잔여코인 확인
        </p>

        <div className="h-[150px] col-span-12 grid grid-cols-12">
          <p className="col-span-6 text-left p-3 text-xl"> 현재 코인 :</p>
          <p className="col-span-6 text-right p-3 text-lg "> <img src="https://i.ibb.co/Db5RC1S/emoji-coin.png" className="w-[25px] mr-2 inline-block" alt="coin" /> {coinValue} 개</p>
          <p className="col-span-6 text-left p-3 text-xl  font-bold ">필요 코인 :</p>
          <p className="col-span-6 text-right p-3 text-[#fa3434] text-lg  font-bold "> - 1 개</p>
        </div>

        {/* 줄 */}
        <div className="col-span-12 h-[2px] bg-[#e4e4e4] " />

        {/* 내용 */}
        <p className="col-span-12 p-3" />
        <p className="col-span-12 text-left p-3 text-center text-lg md:block hidden">
          시선분석 서비스를 이용하기 위해서는 코인이 1개 필요합니다. <br />코인사용
          버튼을 누르면 시선 분석이 시작됩니다
        </p>
        <p className="col-span-12 text-left p-3 text-center text-lg md:hidden block">
          시선분석을 위해 <br />코인 1개가 필요합니다.<br />
          추가 결제를 위해서는 <br />버튼을 눌러주세요.
        </p>

        <p className="col-span-12 p-3" />

        {/* 버튼 */}
        <p className="col-span-3" />
        <button
          className="animate-bounce3 h-[50px] md:h-[60px] col-span-6 justify-center items-center rounded-lg bg-[#40c3ae]"
          onClick={() => modifiedHandleButtonClick(6)}
        >
          <p className="text-lg font-semibold text-center text-white">
            코인 사용
          </p>
        </button>
        <p className="col-span-3" />
        <p className="col-span-12" />


        <p className="col-span-3" />
        <button className=" md:hidden h-[60px] col-span-6 justify-center items-center rounded-lg bg-gray-500">
          <Link to="/mainpay" className="text-lg font-semibold text-center text-white">
            서비스 결제하기
          </Link>
        </button>
        <p className="col-span-3" />
        <p className="col-span-12" />

      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 이미지 */}
      <div className="md:block hidden rounded-[10px] font-Pretendard h-full col-span-12 grid grid-cols-12  md:col-span-4 p-3 bg-white rounded shadow border border-[#DEE2E7]">
        <p className="col-span-12 text-2xl font-bold text-[#505050] text-center p-3 ">
          추가 서비스 이용 방법
        </p>
        <img src="https://i.ibb.co/pZFGctp/Group-624919.png" alt="content-inside" className="h-[150px] col-span-12 mx-auto p-3 mb-" />
        <p className="col-span-12 p-3" />
        {/* 줄 */}
        <div className="col-span-12 h-[2px] bg-[#e4e4e4] " />


        {/* 내용 */}
        <p className="col-span-12 p-3" />

        <p className="col-span-12 text-center p-3 text-lg">
          잔여 코인이 부족하거나 <br />
          추가적인 서비스 결제가 필요하세요?
        </p>
        <p className="col-span-12 p-3" />

        {/* 버튼 */}
        <p className="col-span-3" />


        <p className="col-span-3" />
        <p className="col-span-12" />

        <button className="mt-10 h-[60px] col-span-8 justify-center items-center p-3 whitespace-nowrap">
          <Link to="/mainpay" className="text-lg font-semibold text-center text-white bg-gray-500 py-4 px-20 rounded-lg">
            서비스 결제하기
          </Link>
        </button>


      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      <div className="col-span-12" />
    </div>
  );
};

export default C02Pay;
