import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderAfter() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <Link to="/#" className="ml-4 whitespace-nowrap hover:font-semibold text-black hover:text-blue-500">
                시선 분석
              </Link>
              <Link
                to="/#"
                className="ml-4 whitespace-nowrap hover:font-semibold text-black hover:text-blue-500"
              >
                서비스결제
              </Link>
              <Link
                to="/#"
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
                <p className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[80px] h-[52px] flex items-center justify-center mb-2 md:mb-0">
                  잔여코인 3개
                </p>
                <Link
                  to="/"
                  className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[80px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0"
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
                <div className="justify-between items-center w-full lg:w-auto lg:order-1 md:hidden ">
                  <ul className="absolute flex-col mt-4 font-mediumlg:flex-row lg:space-x-8 lg:mt-0 font-light w-full">
                    <li
                      className="block py-2 pr-4 pl-3 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold "
                      aria-current="page"
                    >
                      About
                    </li>
                    <li
                      className="block py-2 pr-4 pl-3 text-white rounded bg-[#BBBBBB] lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold"
                      aria-current="page"
                    >
                      Pricing
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