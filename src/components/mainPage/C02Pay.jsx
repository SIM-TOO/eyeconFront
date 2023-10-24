import React from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useRemoveCoin from "../../hook/mainPage/useRemoveCoin";
import { setCoin } from "../../store/coinSlice";

const C02Pay = ({ handleButtonClick }) => {
  // 리덕스에 저장된 코인 불러오기
  const dispatch = useDispatch();
  const coinValue = useSelector((state) => state.coin);

  // removeCoin 함수를 가져옵니다.
  const removeCoin = useRemoveCoin();

     // 임시용 통과 코드
     //dispatch(setCoin(9999));

  // 코인 차감 함수
  const modifiedHandleButtonClick = async (value) => {

    // 세센에서 받아온 이메일
    const email = "example@example.com";

    // 임시통과용 코드 
    if (coinValue === 9999) {
      console.log("임시용 통과 코드")
      handleButtonClick(value);
    }  
    // 임시통과용 코드 
    else if (coinValue > 0){
      // 현재 코인 반환
    const result = await removeCoin(email);

    console.log("차감완료")
    // 코인 값 리덕스 저장
    dispatch(setCoin(result.coin));
    
    handleButtonClick(value);
    } else {
      console.log("코인 부족")
    }
  };


  return (
    <div className="text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]">
      {/* 여백용 박스 */}
      <div className="col-span-12 p-3" />
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 잔여 코인 확인 박스 */}
      <div className="col-span-12 h-full md:col-span-5 grid grid-cols-12 p-3 bg-white rounded shadow border border-[#DEE2E7]">
        <p className="col-span-12 text-2xl font-bold text-left text-[#505050]  p-3">
          잔여코인 확인
        </p>

        <div className="h-[150px] col-span-12 grid grid-cols-12">
          <p className="col-span-6 text-left p-3">현재 코인 :</p>
          <p className="col-span-6 text-right p-3"> {coinValue} 개</p>
          <p className="col-span-6 text-left p-3">필요 코인 :</p>
          <p className="col-span-6 text-right p-3 text-[#fa3434]"> - 1 개</p>
        </div>
        {/* 줄 */}
        <div className="col-span-12 h-[2px] bg-[#e4e4e4] " />

        {/* 내용 */}
        <p className="col-span-12 p-3" />
        <p className="col-span-12 text-left p-3">
          시선분석 서비스를 이용하기 위해서는 코인이 1개 필요합니다. 코인사용
          버튼을 누르면 시선 분석이 시작됩니다
        </p>
        <p className="col-span-12 p-3" />

        {/* 버튼 */}
        <p className="col-span-3" />

        <button
          className="animate-bounce3 h-[60px] col-span-6 justify-center items-center rounded-lg bg-[#40c3ae]"
          onClick={() => modifiedHandleButtonClick(6)}
        >
          <p className="text-lg font-semibold text-center text-white">
            코인 사용
          </p>
        </button>
        <p className="col-span-3" />
        <p className="col-span-12" />
      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 이미지 */}
      <div className="h-full col-span-12 grid grid-cols-12  md:col-span-4 p-3 bg-white rounded shadow border border-[#DEE2E7]">
        <p className="col-span-12 text-2xl font-bold text-left text-[#505050]  p-3">
          추가 서비스 이용 방법
        </p>
        <img
          src="https://i.ibb.co/vmWSTyD/content-inside.jpg"
          alt="content-inside"
          className="h-[150px] col-span-12 mx-auto p-3"
        />
        {/* 줄 */}
        <div className="col-span-12 h-[2px] bg-[#e4e4e4] " />

        {/* 내용 */}
        <p className="col-span-12 p-3" />
        <p className="col-span-12 text-left p-3">
          잔여 코인이 부족하거나 추가적인 서비스 결제가 필요하세요?
        </p>
        <p className="col-span-12 p-3" />

        {/* 버튼 */}
        <p className="col-span-3" />
        <button className="h-[60px] col-span-6 justify-center items-center rounded-lg bg-[#40c3ae]">
          <Link
            to="/mainpay"
            className="text-lg font-semibold text-center text-white"
          >
            서비스 결제하기
          </Link>
        </button>
        <p className="col-span-3" />
        <p className="col-span-12" />
      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      <div className="col-span-12" />


    </div>
  );
};

export default C02Pay;
