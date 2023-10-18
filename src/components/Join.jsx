import React from "react";

import UserHeader from './userPage/UserHeader';
import UserImage from './userPage/UserImage';

import useUserIdCK from '../hook/userPage/useUserIdCK';
import useUserPWCK from '../hook/userPage/useUserPWCK';
import useUserPWCKM from '../hook/userPage/useUserPWCKM';
import useUserJoin from '../hook/userPage/useUserJoin';
import useUserAddress from '../hook/userPage/useUserAddress';

function Join() {

  const { address, setAddress } = useUserAddress();
  const IdErrorMessage = useUserIdCK();
  const PWErrorMessage = useUserPWCK();
  const PWMErrorMessage = useUserPWCKM();
  const { formRef, handleSubmit } = useUserJoin();

  // 주소 검색 새로운 창여는 코드
  const handleButtonClick = () => {
    window.open('/place', 'AddressPopup', 'width=650,height=500');
  };

  // 전송 버튼 클릭시 로컬스토리지 데이터 삭제 기능
  const handleClearLocalStorage = () => {
    localStorage.clear('');
  };

  return (
    <div>
      <UserHeader />
      <main className="container my-10 p-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <UserImage />
          <div className="mx-auto lg:p-10 lg:min-w-[600px] p-0 min-w-[300px]">
            <p className="text-3xl font-medium text-left text-black p-3">Sign in</p>

            {/* from 태그 시작 */}
            <form ref={formRef} onSubmit={handleSubmit}>

              {/* 아이디 입력 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg p-3 w-[340px]">
                  <input type="email" name="email" placeholder="Email" className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                </div>
                <p className="message" style={{ color: 'red', fontSize: 10 }}>
                  {IdErrorMessage}
                </p>
              </div>

              {/* 비밀번호 입력 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
                <p className="message" style={{ color: 'red', fontSize: 10 }}>
                  {PWErrorMessage}
                </p>
              </div>

              {/* 비밀번호 확인 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="password"
                    name="passwordCheck"
                    placeholder="Password Check"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
                <p className="message" style={{ color: 'red', fontSize: 10 }}>
                  {PWMErrorMessage}
                </p>
              </div>

              {/* 업종 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <select
                    name="category"
                    className="bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                    defaultValue="" // Use defaultValue here
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="편의점">편의점</option>
                    <option value="마트">마트</option>
                  </select>
                </div>
              </div>

              {/* 가게 이름 */}
              <div className="mb-4 font-Pretendard">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="storeName"
                    name="storeName"
                    placeholder="Store Name"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
              </div>

              {/* 가게 주소 1 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="text"
                    name="place1"
                    placeholder="Store Place"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div
                  onClick={handleButtonClick}
                  className="rounded-lg bg-[#15c3a7] p-3 text-base font-medium text-white w-[340px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in flex items-center justify-center cursor-default"
                >
                  Search Address
                </div>
              </div>

              {/* 가게 주소 2 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="place2"
                    name="place2"
                    placeholder="Store Detail Place"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
              </div>

              {/* 버튼 */}
              <div className="mb-4">
                <button
                  onClick={handleClearLocalStorage}
                  type="submit"
                  className="rounded-lg bg-[#15c3a7] p-3 text-base font-medium text-white w-[340px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in">
                  Join
                </button>
              </div>

            </form>
            {/* form 태그 완료 */}

          </div>
        </div>
      </main >
    </div >
  )
}

export default Join