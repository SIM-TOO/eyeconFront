import React, { useState, useEffect } from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../../lottie/eyeconhello.json";

function AIchatStart({ onButtonClick }) {

    //임시 가게 리스트 생성
    const [storeList, setStoreList] = useState([]);
    /* 내가 선택한 가게 */
    const [selectedStore, setSelectedStore] = useState(null);


    //드롭다운 박스 생성
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 드롭다운의 항목(가게 리스트)
    const handleSelect = (storeName) => {
        setSelectedStore(storeName);
        setIsDropdownOpen(false);
    };

    //드롭다운 여는 event
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // 드롭다운 닫음

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };


    
    //가게 데이터셋
    useEffect(() => {
        const testStore = [
            { id: 1, storeName: '아이콘편의점' },
            { id: 2, storeName: '안녕편의점' },
        ]; setStoreList(testStore);
    }, []);


    //드롭다운 후 버튼 등장 근데 사라지진 않는디요
    const handleSelectButton = (storeName) => {
        setSelectedStore(storeName);
        closeDropdown(); 
    };



    return (
        <div className="font-Pretendard h-[100%] col-span-12 md:col-span-7 p-3 flex flex-col items-center justify-center">
            {/* 이미지 */}
            <StartRobot className='max-w-full max-h-full' />

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
                        <p className='text-white text-ml font-bold cursor-pointer whitespace-nowrap '>챗봇과 시선분석 시작하기</p><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" alt='' className='ml-5 w-[15px] animate-pulse' /><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" alt='' className='w-[15px] animate-pulse' />
                    </div>
                )}

            </div>

            {/* 드롭다운 버튼 */}

            <button
                onClick={toggleDropdown}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="w-[250px] text-white text-center bg-[#46cfb9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >

                {selectedStore || '내 가게 선택 '}
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
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
                <div id="dropdown" className="z-10 absolute right-100 top-[75%] mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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

export default AIchatStart;
