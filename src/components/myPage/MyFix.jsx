import React from "react";

const MyFix = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div
        className="w-[70%] h-[90%] rounded-2xl"
        style={{
          background:
            "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
          boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
        }}
      >
        <div className="container mx-auto grid grid-cols-12 max-w-screen-xl font-Pretendard">
          <div className="col-span-1" />
          <div className="col-span-9">
            <div className="text-center text-3xl font-bold p-7 ml-10">
              마이페이지
            </div>
            <div className="col-span-5"> 이메일 주소</div>
            {/* 이메일 주소 출력 */}
            <div className="mt-1 font-bold">
              <p>eyecon@naver.com</p>
            </div>

            {/* 비밀번호 */}
            <div className="col-span-5 mt-3"> 비밀번호</div>

            <div className="bg-[#FFFFFF] rounded-lg w-[250px] p-3 relative flex justify-between mt-3">
              <input
                type="password"
                name="password"
                className="bg-[#FFFFFF] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
              />
            </div>
            <div className="col-span-5 mt-3">
              비밀번호 수정
              <div className="flex items-center">
                <div className="bg-[#FFFFFF] rounded-lg w-[250px] p-3 relative flex justify-between col-span-3 mt-3">
                  <input
                    type="password"
                    name="passwordCheck"
                    className="bg-[#FFFFFF] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
                <button className="col-span-2 ml-3 mt-3 rounded-lg bg-[#15c3a7] p-2 text-base text-sm text-white w-[80px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in">
                  번호수정
                </button>
              </div>
              <div>가게 정보 넣을 div박스</div>
            </div>
          </div>
          <div className="col-span-1">
            {/* 새 가게 생성 버튼 */}
            <button className="mt-7 rounded-lg bg-[#00306D] p-2 text-base text-sm text-white w-[100px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in flex items-center">
              <img
                src="https://i.ibb.co/h2FyQNK/plus-circle.png"
                className="mr-2"
              />
              가게 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFix;
