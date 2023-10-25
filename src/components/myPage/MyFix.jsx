import React from "react";

const MyFix = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div
        className="w-[70%] h-[95%] rounded-2xl"
        style={{
          background:
            "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
          boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
        }}
      >
        <div className="container mx-auto grid grid-cols-12 max-w-screen-xl font-Pretendard">
          <div className="col-span-1" />
          <div className="col-span-5">
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

                {/* 비밀번호 수정 버튼 */}
                <button className="col-span-2 ml-3 mt-3 rounded-lg bg-[#15c3a7] p-2 text-base text-sm text-white w-[80px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in">
                  번호수정
                </button>
              </div>
              {/*가게 추가 버튼 */}
              <button className="mt-3 rounded-lg bg-[#00306D] p-2 text-base text-center text-sm text-white w-[110px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in flex items-center">
                <img
                  src="https://i.ibb.co/h2FyQNK/plus-circle.png"
                  className="mr-2"
                />
                가게 추가
              </button>
            </div>
          </div>

          <div className="col-span-2">{/* 여백 */}</div>
          

          {/* 내 가게  */}
          <div className="col-span-4 mt-3 bg-white rounded-lg p-3">
            <div className="col-span-1 p-3">
              <p className="font-bold text-xl">내 가게 1</p>
              <div />
              <div className="col-span-3 p-3">
                <p>매장명</p>
                <div className="col-span-2">
                  맛있어요 편의점
                  {/* 매장명 수정 버튼  */}
                  <button className="col-span-1 ml-3 p-1 rounded-lg bg-[#00306D] text-base text-center text-sm text-white w-[70px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in items-center">
                    {" "}
                    수정하기
                  </button>
                </div>
                <div className="col-span-1 mt-3 mb-1"> 업종 분류</div>
                {/* 업종 선택 */}
                <div className="col-span-3 bg-[#EDF2F6] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <select
                    name="category"
                    className="bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="편의점">편의점</option>
                    <option value="마트">마트</option>
                  </select>
                </div>

                <div className="col-span-4 mt-3 ">
                  <div className="col-span-1 mt-3 mb-1"> 매장 주소</div>
                  {/* 주소 검색 API 넣을 버튼 */}
                  <div className="bg-[#EDF2F6] rounded-lg w-[340px] p-3 relative flex justify-between">
                    <input
                      type="text"
                      name="place1"
                      placeholder="주소 검색"
                      className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] flex-1"
                    />
                    <img
                      src="https://i.ibb.co/VQjYh2k/searchicon.png"
                      alt="searchicon"
                      border="0"
                      className="absolute cursor-default w-6 h-6 right-1 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  <div className="bg-[#EDF2F6]  mt-3 rounded-lg w-[340px] p-3 relative flex justify-between">
                    <input
                      type="place2"
                      name="place2"
                      placeholder="상세 주소 입력"
                      className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          {/* 가게 추가 박스  */}
          <div className="col-span-4">
            {" "}
            <div className="col-span-4 mt-3 bg-white rounded-lg p-3">
              <div className="col-span-1 p-3">
                <div />

                <div className="col-span-3 p-3">
                  <p>매장명</p>
                  <div className="bg-[#EDF2F6]  mt-3 rounded-lg w-[340px] p-3 relative flex justify-between">
                    <input
                      type="placename"
                      name="placename"
                      placeholder="매장명"
                      className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                    />
                  </div>
                  <div className="col-span-1 mt-3 mb-1"> 업종 분류</div>
                  {/* 업종 선택 */}
                  <div className="col-span-3 bg-[#EDF2F6] rounded-lg w-[340px] p-3 relative flex justify-between">
                    <select
                      name="category"
                      className="bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="편의점">편의점</option>
                      <option value="마트">마트</option>
                    </select>
                  </div>

                  <div className="col-span-4 mt-3 ">
                    <div className="col-span-1 mt-3 mb-1"> 매장 주소</div>
                    {/* 주소 검색 API 넣을 버튼 */}
                    <div className="bg-[#EDF2F6] rounded-lg w-[340px] p-3 relative flex justify-between">
                      <input
                        type="text"
                        name="place1"
                        placeholder="주소 검색"
                        className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] flex-1"
                      />
                      <img
                        src="https://i.ibb.co/VQjYh2k/searchicon.png"
                        alt="searchicon"
                        border="0"
                        className="absolute cursor-default w-6 h-6 right-1 top-1/2 transform -translate-y-1/2"
                      />
                    </div>
                    <div className="bg-[#EDF2F6]  mt-3 rounded-lg w-[340px] p-3 relative flex justify-between">
                      <input
                        type="place2"
                        name="place2"
                        placeholder="상세 주소 입력"
                        className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                      />
                    </div>

                    {/*가게 등록 버튼 */}
                    <button className="mt-3 rounded-lg bg-[#00306D] p-2 text-base text-center text-sm text-white w-[110px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in flex items-center">
                      <img
                        src="https://i.ibb.co/h2FyQNK/plus-circle.png"
                        className="mr-2"
                      />
                      가게 등록
                    </button>
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

export default MyFix;
