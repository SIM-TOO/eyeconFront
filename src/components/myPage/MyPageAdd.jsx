import React from "react";
import useUserAddress from "../../hook/userPage/useUserAddress";
// import MyPageList from "./MyPageList";

const MyPageAdd = () => {


  
  
    // /* 주소 API 삽입 근데 오류뜸... */
  
  const { address, setAddress } = useUserAddress();
  const handleButtonClick = () => {
    window.open("/place", "AddressPopup", "width=650,height=500");
  };

  return (
    <div className="w-auto md:w-[420px] w-[280px] mt-3 bg-white rounded-lg p-3 filter drop-shadow-lg">
      <form>
        <div className="col-span-1 p-3">
          <p className="font-bold text-xl">내 가게 등록 </p>

          <div className="col-span-3 md:p-3 ">
            <p>매장명 </p>
            {/* 매장명 입력 박스 */}
            <div className="bg-[#EDF2F6] mt-1 rounded-lg w-[220px] md:w-[340px] p-2 relative flex justify-between">
              <input
                type="placename"
                name="placename"
                placeholder="매장 이름 입력"
                className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
              />
            </div>
            <div className="col-span-1 mt-3 mb-1"> 업종 분류</div>
            {/* 업종 선택 */}
            <div className="col-span-3 bg-[#EDF2F6] rounded-lg w-[220px] md:w-[340px] p-2  relative flex justify-between">
              <select
                name="category"
                className="bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                defaultValue=""
              >
                <option value="" disabled>
                  업종을 선택해주세요
                </option>
                <option value="편의점">편의점</option>
                <option value="마트">마트</option>s
              </select>
            </div>

            <div className="col-span-4 mt-3 ">
              <div className="col-span-1 mt-3 mb-1"> 매장 주소</div>
              {/* 주소 검색 API 넣을 버튼 */}
              <div className="bg-[#EDF2F6] rounded-lg p-2 relative flex justify-between">
                <input
                  type="text"
                  name="place1"
                  placeholder="주소 검색"
                  className="text-[#00306D] w-[220px] md:w-[340px] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] flex-1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onClick={handleButtonClick}
                />
                <img
                  src="https://i.ibb.co/m6x4dXL/Vector.png"
                  alt="searchicon"
                  border="0"
                  className="absolute cursor-default w-5 h-5 right-2 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <div className="bg-[#EDF2F6] mt-3 rounded-lg w-[220px] md:w-[340px] p-2 relative flex justify-between">
                <input
                  type="place2"
                  name="place2"
                  placeholder="상세 주소 입력"
                  className="text-[#00306D] bg-[#EDF2F6] outline-none focus:outline-none text-[15px] text-[#00306D] flex-1"
                />
              </div>
              <button className="mt-3 rounded-lg bg-[#00306D] p-2 text-base text-center text-sm text-white w-[70px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in flex items-center">
                등록하기
              </button>
            </div>
          </div>
        </div>
      </form> 
    </div>
  );
};

export default MyPageAdd;
