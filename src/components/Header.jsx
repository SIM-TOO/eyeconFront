import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div>
      <header className=" text-white p-5">
        <nav class="container mx-auto">
          <div className="grid grid-cols-12 gap-4 max-w-screen-xl">

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
              <Link to="/#" className="text-black hover:underline">About</Link>
              <Link to="/#" className="ml-4 text-black hover:underline">Pricing</Link>
              {/* 추가 버튼 시 "ml-4" 넣기 */}
            </div>

            {/* 서비스 시작 버튼 & 회원 가입 */}
            <div className="col-span-6 flex items-center justify-end hidden md:flex">
              <div className="flex flex-wrap">
                <Link to="/#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[80px] h-[52px] flex items-center justify-center mb-2 md:mb-0">
                  서비스 시작하기
                </Link>
                <Link to="/#" className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[80px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0">
                  회원가입
                </Link>
              </div>
            </div>

            {/* 모바일 화면시 나오는 햄버거 버튼 */}
            <div className="col-span-2 relative md:hidden">
              <button
                onClick={toggleMenu}
                className=" flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[80px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0">
                X
              </button>
              {menuOpen && (
                <div className="absolute mt-2 py-5 px-5 bg-gray-800 rounded-md">
                  <ul className="text-white">
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </nav>
      </header>
    </div >
  );
}

export default Header;
