import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useCoin from "../hook/mainPage/useCoin"
import { setCoin } from '../store/coinSlice';


function HeaderAfter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // 리덕스에 코인 가져오기
  const remainingCoins = useSelector(state => state.coin);

  const getCoinInfo = useCoin();

  // 코인 리덕스에 저장 하는 코드
  useEffect(() => {
    const fetchCoinInfo = async () => {
      // 실제 이메일 값을 넣어야됨 세션에서 가져올것
      const coins = await getCoinInfo("example@example.com");
      if (coins !== null) {
        dispatch(setCoin(coins));  // 가져온 코인 값을 스토어에 저장합니다.
      }
    };
    fetchCoinInfo();
  }, [dispatch, getCoinInfo]);

  // 메뉴 토글
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className=" text-white p-5 font-Pretendard">
        <nav>
          <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">
            {/* 로고 */}
            <div className="col-span-10 md:col-span-2 flex items-center">
              <Link to="/#" className="flex items-center">
                <img
                  src="https://i.ibb.co/HrC0TWJ/Group-6348.png"
                  className="w-[140px] h-[54px]"
                  alt="logo"
                />
              </Link>
            </div>

            {/* 메뉴바 */}
            <div className="col-span-4 flex items-center hidden md:flex">
              <Link to="/main" className="ml-4 whitespace-nowrap hover:font-semibold text-black hover:text-blue-500">
                시선 분석
              </Link>
              <Link
                to="/mainpay"
                className="ml-4 whitespace-nowrap hover:font-semibold text-black hover:text-blue-500"
              >
                서비스결제
              </Link>
              <Link
                to="/mainpay"
                className="ml-4 whitespace-nowrap hover:font-semibold text-black hover:text-blue-500"
              >
                마이페이지
              </Link>
              <Link
                to="/#"
                className="ml-4  whitespace-nowrap hover:font-semibold text-black hover:text-blue-500"
              >
                결과페이지
              </Link>
            </div>

            {/* 잔여코인 확인 & 로그아웃 버튼 */}
            <div className="col-span-6 flex items-center justify-end hidden md:flex">
              <div className="flex flex-wrap">
                <p className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[90px] h-[52px] flex items-center justify-center mb-2 md:mb-0"
                >
                  <img src="https://i.ibb.co/Db5RC1S/emoji-coin.png" className="w-[20px] mr-2" alt="coin" />
                  {remainingCoins}개
                </p>
                <Link
                  to="/"
                  className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[90px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0"
                >
                  로그아웃
                </Link>
              </div>
            </div>

            {/* 모바일 화면시 나오는 햄버거 버튼 */}
            <div className="col-span-2 relative md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              {menuOpen && (
                <div className="absolute justify-between items-center w-full lg:w-auto lg:order-1 md:hidden z-10">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-light w-full">
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/">시선 분석</Link>
                    </li>
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#BBBBBB] lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/mainpay">서비스결제</Link>
                    </li>
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/">마이페이지</Link>
                    </li>
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#BBBBBB] lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/pay">결과페이지</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderAfter;