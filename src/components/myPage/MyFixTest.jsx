import React, { useState } from "react";
import MyPageAdd from "./MyPageAdd";

const MyFixTest = () => {



    const [isLoading, setIsLoading] = useState(false);

    const handleAddButtonClick = () => {
        // 버튼 클릭 시 로딩 상태를 토글
        setIsLoading((prevLoading) => !prevLoading);
        // 추가적인 데이터 또는 작업을 수행할 수 있습니다.
    };


    return (
        <div
            className="flex flex-col items-center font-Pretendard min-h-full"
            style={{ height: "calc(100vh - 120px)" }}
        >
            <div
                className="w-[90%] md:w-[70%] md:h-[90%] rounded-2xl"
                style={{
                    background:
                        "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
                    boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
                }}
            >
                {/* 마이페이지 시작 */}
                <p className="text-center text-2xl font-bold mt-7 mb-3">마이페이지</p>
                <div class="container mx-auto max-w-screen-xl font-Pretendard">
                    <div class="grid grid-cols-7 lg:grid-cols-12">
                        <div className="grid-cols-1 lg:grid-cols-1" />
                        <div className="col-span-4">
                            {" "}
                            {/* col-span-4를 col-span-3으로 수정 */}
                            <div> 이메일 주소</div>
                            {/* 이메일 주소 출력 */}
                            <div className="mt-1 font-bold">
                                <p>eyecon@naver.com</p>
                            </div>
                            {/* 비밀번호 */}
                            <div className="mt-3"> 비밀번호</div>
                            <div className="rounded-lg">
                                <input
                                    type="password"
                                    name="password"
                                    className="bg-[#FFFFFF] rounded-lg p-3 flex justify-between mt-3 outline-none focus:outline-none text-[15px] text-[#15c3a7] w-auto md:w-[325px] w-[170px]"
                                />
                            </div>
                            <div className="mt-3">
                                비밀번호 수정
                                <div className="flex items-center"> {/* flex-wrap 클래스 추가 */}
                                    <div className="bg-[#FFFFFF] rounded-lg p-3 relative flex justify-between">
                                        <input
                                            type="password"
                                            name="passwordCheck"
                                            className="col-span-2 bg-[#FFFFFF] outline-none focus:outline-none text-[15px] text-[#15c3a7] w-auto md:w-[300px] w-[150px]"
                                        />
                                    </div>
                                    {/* 버튼을 다음 줄로 옮김 */}
                                    <button className="whitespace-nowrap mt-2 ml-2 rounded-lg bg-[#15c3a7] p-2 text-base text-sm text-white w-[80px] hover:bg-[#128d82] active:bg-[#0d6b59] md:mt-3 md:ml-2 md:mb-3">
                                        번호수정
                                    </button>
                                    {/* 비밀번호 수정 버튼 */}
                                </div>
                                {/*가게 추가 버튼 */}
                                <button onClick={handleAddButtonClick} className="mt-3 md:mt-1 rounded-lg bg-[#00306D] p-2 text-base text-center text-sm text-white w-[110px] hover:bg-[#128d82] active:bg-[#0d6b59] flex items-center" >
                                    <img
                                        src="https://i.ibb.co/h2FyQNK/plus-circle.png"
                                        className="mr-2"
                                    />
                                    가게 추가
                                </button>
                                {/* 가게 추가 컴포넌트 생성 창 */}
                                <div>
                                    {isLoading && <MyPageAdd />}

                                </div>
                            </div>
                        </div>

                        <div className="col-span-2" />

                        {/* 내 가게 관리 */}

                        <div className="col-span-4 mt-3 ">
                            <div className="bg-white rounded-lg p-3 filter drop-shadow-lg">
                                <div className="col-span-1 p-3">
                                    {/* 가게 이름 입력될 곳 */}
                                    <p className="font-bold text-xl">아이콘 편의점</p>
                                    <div />
                                    <div className="col-span-3 p-3">
                                        <p className="font-bold">업종 분류</p>
                                        {/* 업종 입력될 곳 */}
                                        <p className="mt-1">편의점</p>

                                        <div className="col-span-4">
                                            <p className="col-span-1 mt-3 mb-1 font-bold">
                                                {" "}
                                                매장 주소
                                            </p>
                                            {/* 주소 입력될 곳 */}
                                            <p className="col-span-1 mb-1">
                                                광주 동구 충장로 3가 125번지 1층
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 기존 가게 들어갈 곳 */}

                            {/* 가게가 추가되면 들어갈 곳 들어갈 곳 */}
                            <div className="col-span-4 mt-3 bg-white rounded-lg p-3 filter drop-shadow-lg">
                                <div className="col-span-1 p-3 ">
                                    <p className="font-bold text-xl">아이콘 편의점 </p>
                                    <div />
                                    <div className="col-span-3 p-3">
                                        <p className="font-bold">업종 분류</p>
                                        {/* 업종 입력될 곳 */}
                                        <p className="mt-1">편의점</p>

                                        <div className="col-span-4">
                                            <p className="col-span-1 mt-3 mb-1 font-bold">
                                                {" "}
                                                매장 주소
                                            </p>
                                            {/* 주소 입력될 곳 */}
                                            <p className="col-span-1 mb-1">
                                                광주 동구 충장로 3가 125번지 1층
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFixTest;
