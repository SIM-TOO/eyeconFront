import React from 'react'
import { Link } from 'react-router-dom';


function UserHeader() {
    return (
        <div>
            <header className=" text-white p-5">
                <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">
                    {/* 로고 */}
                    <div className="col-span-10 md:col-span-2 flex items-center">
                        <Link to="/#" className="flex items-center">
                        <img
                  src="https://i.ibb.co/HrC0TWJ/Group-6348.png"
                  className="w-[140px] h-[54px] dark:hidden "
                  alt="logo"
                />
                <img src="https://i.ibb.co/dKwGbXx/Kakao-Talk-20231026-151815812.png"
                className="w-[140px] h-[54px] hidden dark:block"
                alt="logo2"/>
                        </Link>
                    </div>
                </div>
            </header>
        </div >
    )
}

export default UserHeader