import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  ///
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div>
      <header className=" text-white p-5">
        <nav class="container mx-auto">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            {/* 로고 */}
            <Link to="/#" className="flex items-center">
              <img
                src="https://i.ibb.co/HrC0TWJ/Group-6348.png"
                class="w-[140px] h-[54px]"
                alt="logo"
              />
            </Link>


            <div>
              <Link to="/#" className="block py-2 pr-4 pl-3 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
              >About
              </Link>

              <Link to="/#" className="block py-2 pr-4 pl-3 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
              >Pricing
              </Link>
            </div>

            {/* 서비스 시작 버튼 & 회원 가입 */}
            <div className="flex items-center lg:order-2">
              <Link to="/#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[80px] h-[52px] flex items-center justify-center">
                서비스 시작하기
              </Link>
              <Link to="/#" className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[80px] bg-[#15c3a7] border border-[#d9dbe9]">
                회원가입
              </Link>
            </div>
          </div>



        </nav>
      </header>
    </div >
  );
}

export default Header;
