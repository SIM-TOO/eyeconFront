import React, { useState, useEffect } from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../../lottie/eyeconhello.json";
import lottieJson2 from "../../../lottie/animationstore.json";
function AIchatStart({ onButtonClick }) {



    const [storeList, setStoreList] = useState([]);
    const [selectedStore, setSelectedStore] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [robotComponent, setRobotComponent] = useState("StoreRobot"); // 로봇 컴포넌트 상태



    //내 가게 선택 가게 선택 시 드롭다운 사라지고 버튼 뜨고 로봇 전환
    const handleSelect = (storeName) => {
        setSelectedStore(storeName);
        closeDropdown();
        setRobotComponent("StartRobot"); // 드롭다운 선택 시 로봇 전환
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const testStore = [
            { id: 1, storeName: '아이콘편의점' },
            { id: 2, storeName: '안녕편의점' },
        ];
        setStoreList(testStore);
    }, []);



    const handleSelectButton = (storeName) => {
        setSelectedStore(storeName);
        closeDropdown();
        setRobotComponent("StartRobot"); // 드롭다운 선택 시 로봇 전환
    };

    const dropdownClass = isDropdownOpen ? 'hidden' : 'block';

    return (
        <div className="font-Pretendard h-[100%] col-span-12 md:col-span-7 p-3 flex flex-col items-center justify-center">
            {/* 이미지 */}
            {robotComponent === "StoreRobot" ? (
                <StoreRobot className='max-w-full max-h-full' />
            ) : (
                <StartRobot />
            )}

            {/* 대화 시작하기 버튼 */}
            <div className='w-[100%] grid grid-cols-12 p-3'>
                <div className="col-span-12 p-3" />
                <div className="col-span-3" />
                {selectedStore && (
                    <div className="col-span-12 md:col-span-7 flex justify-center whitespace-nowrap items-center p-3 rounded-lg bg-[#40c3ae] cursor-pointer "
                        onClick={() => {
                            onButtonClick();
                            toggleDropdown(); // 드롭다운을 닫는다
                        }}
                        style={{ zIndex: 999 }}
                    >
                        <p className='text-white text-ml font-bold cursor-pointer whitespace-nowrap '>챗봇과 시선분석 시작하기</p><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" alt='' className='ml-5 w-[15px] animate-pulse' /><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" alt='' className='w-[15px] animate-pulse' /><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" alt='' className='w-[15px] animate-pulse' />
                    </div>
                )}

            </div>

            {/* 드롭다운 버튼 */}
            <button
                onClick={toggleDropdown}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="md:ml-10 relative flex w-[300px] h-[50px] text-white  text-center bg-blue-800  hover:bg-[#46cfb9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-content-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                <p className="ml-[70px]">
                    {selectedStore || '내 가게 선택하기 '}
                </p>
                <svg
                    className="w-3.5 h-3.5 ml-2.5 animate-pulse"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>


            {/* 드롭다운 메뉴 */}
            {isDropdownOpen && (
                <div id="dropdown" className="text-center z-10 absolute right-100 top-[75%] mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li
                            key="showAll"
                            className={`p-2 text-center hover:bg-gray-100 cursor-pointer ${!selectedStore ? 'bg-gray-100' : ''}`}
                            onClick={() => {
                                setSelectedStore(null);
                                setIsDropdownOpen(false);
                            }}
                        >
                            모두 표시
                        </li>

                        {/* 스토어 이름 불러오는 map함수 */}
                        {storeList.map((item) => (
                            <li
                                key={item.id}
                                className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedStore === item.storeName ? 'bg-gray-100' : ''}`}
                                onClick={() => handleSelect(item.storeName)}
                            >
                                {item.storeName}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function StartRobot() {
    return (
        <Lottie
            className='translate3d-10-55-0 w-[60%]'
            loop
            animationData={lottieJson}
            speed={2.5}
            play
        />
    );
}

function StoreRobot() {
    return (
        <Lottie
            className='translate3d-10-55-0 w-[50%]'
            loop
            animationData={lottieJson2}
            speed={1.5}
            play
        />
    );
}

export default AIchatStart;
