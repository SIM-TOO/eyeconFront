import React, { useContext, useEffect, useState } from "react";
import HeaderAfter from "./HeaderAfter";
import MainPay from "./payPage/MainPay";
import PayHistory from "./payPage/PayHistory";
import axios from "axios";
import { TokenRefresherContext } from "../context/TokenRefresherContext";


function MainPageAfterPay() {

  // 토클 상태 확인용
  const [showMainPay, setShowMainPay] = useState(false);

  const TokenRefresher = useContext(TokenRefresherContext);

  const handleToggle = () => {
    setShowMainPay(!showMainPay);
  };

  // 테스트용 이상없음
  // const paymentHistoryData = [
  //   {
  //     date: '2023-11-01',
  //     time: '22:47:16',
  //     coin_id: 1,
  //     coin: 3,
  //     price: 100,
  //     finance: '신한카드',
  //   },
  //   {
  //     date: '2023-10-31',
  //     time: '22:47:16',
  //     coin_id: 2,
  //     coin: 3,
  //     price: 100,
  //     finance: '국민KB카드',
  //   },
  // ];

  const [paymentHistoryData, setPaymentHistoryData] = useState([]);

  useEffect(() => {
    // url 주소값
    const url = process.env.REACT_APP_MASTER_URL;

    // 함수 실행
    const HistoryData = async () => {
      try {
        // 실제 사용 주소 추가 필요
        const response = await TokenRefresher.get(`${url}/verify/`);

        // 확인용
        console.log("확인용 response : ", response)
        console.log("확인용 response.data : ", response.data)

        // 반환값 예시용.
        //   {
        //     date: '2023-10-31',
        //     time: '22:47:16',
        //     coin_id: 2,
        //     coin: 3,
        //     price: 100,
        //     finance: '국민KB카드',
        //   }

        //가져온 데이터 배열로 저장  
        setPaymentHistoryData(response.data);


      } catch (error) {
        console.error('결제 내역 오류 발생:', error);
      }
    };

    // 함수 실행
    HistoryData();
  }, []);




  return (
    <div className="h-screen bg-no-repeat bg-cover md:bg-[url('https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png')] dark:bg-[url('https://i.ibb.co/PD92ZQZ/1.png')]">

      {/* 헤더 */}
      <HeaderAfter />
      <div className="flex flex-col items-center" >

        {/* 내부 박스 */}
        <div className={" w-[95%] md:w-[70%] md:h-[90%] p-3 rounded-2xl"} style={{ background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)", boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)" }}>


          {/* 버튼 박스 */}
          <div className="flex flex-col items-center">
            <label className="relative inline-flex items-center cursor-pointer" style={{ zIndex: 999 }} >
              <input type="checkbox" value="" className="sr-only peer" checked={showMainPay} onChange={handleToggle} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="select-none ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{showMainPay ? "결제화면" : "결제내역"}</span>
            </label>
          </div>

          <div className={`${showMainPay ? '' : 'flex flex-col justify-center items-center'}`}>
            {/* 결제와 결제내역 변경용  */}
            {showMainPay ? <PayHistory paymentHistory={paymentHistoryData} /> : <MainPay />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageAfterPay;
