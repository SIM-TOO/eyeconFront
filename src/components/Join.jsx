import { useContext, useEffect, useState } from "react";
import React from "react";
// import Place from "../methodes/Place";
import DaumPostcode from 'react-daum-postcode';

function Join() {

  // const {company, setCompany} = useContext(AddressContext);


  // 초기값 세팅하기
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [storeName, setStoreName] = useState("");
  const [place1, setPlace1] = useState("");
  const [place2, setPlace2] = useState("");
  const [store, setStore] = useState("");

  // 오류메세지 세팅

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  // const [storeNameMessage, setStoreNameMessage] = useState("");
  // const [place1Message, setPlace1Message] = useState("");
  // const [place2Message, setPlace2Message] = useState("");
  // const [storeMessage, setStoreMessage] = useState("");



  // 유효성 세팅하기
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState("");
  const [isStoreName, setIsStoreName] = useState("");
  const [isPlace1, setIsPlace1] = useState("");
  const [isPlace2, setIsPlace2] = useState("");
  const [isStore, setIsStore] = useState("");

  // 아이디 체크
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const idRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!idRegExp.test(currentEmail)) {
      setEmailMessage("대소문자 또는 숫자만 입력한 메일을 주세요!");

      setIsEmail(false);
    } else {

      setEmailMessage("사용가능한 메일입니다.");
      setIsEmail(true);
    }
  };

  // 비밀번호 확인용
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 틀립니다!");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeStoreName = (e) => {
    const currentStoreName = e.target.value;
    setIsStoreName(currentStoreName);
    setIsStoreName(true);
  };


  // 폼제출 확인용
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막습니다.

    // 폼 제출을 처리하기 위한 로직을 여기에 추가하세요.
    // 예를 들어, 모든 필드가 유효한지 확인한 다음 추가적인 작업을 진행할 수 있습니다.
    // fetch 또는 유사한 메서드를 사용하여 서버에 폼 데이터를 제출할 수도 있습니다.

    // 예시 로직 (실제 로직으로 대체하세요):
    if (isEmail && isPassword && isPasswordConfirm && isStoreName && isPlace1 && isPlace2 && isStore) {
      // 모든 필드가 유효하면 추가적인 작업을 진행할 수 있습니다.
      console.log("폼이 성공적으로 제출되었습니다!");
    } else {
      // 에러 메시지 표시 또는 유효하지 않은 폼 제출을 처리합니다.
      console.error("폼 제출 실패. 필수 필드를 모두 입력하세요.");
    }
  };
//************ */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
      setIsModalOpen(true);
  };



  return (
    <div>

      <header className=" text-white p-5">
        <div className="container mx-auto">
          <img src="https://i.ibb.co/7R0ySQh/logo.png" alt="logo" border="0"></img>
        </div>
      </header>

      <main className="container my-5 p-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="hidden md:flex items-center">
            <img src="https://i.ibb.co/hZwKssf/image.png" alt="image" border="0"></img>
          </div>

          <div className="mx-auto lg:p-12 lg:min-w-[600px] p-0 min-w-[300px]">

            <p className="text-3xl font-medium text-left text-black p-3">Sign Up</p>

            <form onSubmit={handleSubmit}>

              {/* 이메일 */}
              <div className="mb-4">
                <div className=" bg-[#f3fffd] rounded-lg p-2">
                  <input
                    type="email"
                    defaultValue={email}
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요"
                    className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                </div>
              </div>
              <p className="message" style={{ color: 'red', fontSize: 7 }}>
                {emailMessage}
              </p>

              {/* 비밀번호 */}
              <div className="mb-4 flex items-center">
                <div className="bg-[#f3fffd] rounded-lg p-2 relative flex-1">
                  <input
                    type="password"
                    defaultValue={password}
                    onChange={onChangePassword}
                    placeholder="비밀번호를 입력해주세요"
                    className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]"
                  />
                </div>
                <img
                  src="https://i.ibb.co/mHg1TWV/Group.png"
                  alt="Group"
                  className="ml-2"
                />
              </div>

              <p className="message" style={{ color: 'red', fontSize: 7 }}>
                {passwordMessage}
              </p>

              {/* 비밀번호 재확인 */}
              <div className="mb-4 flex items-center">
                <div className="bg-[#f3fffd] rounded-lg p-2 relative flex-1">
                  <input
                    type="password"
                    defaultValue={passwordConfirm}
                    onChange={onChangePasswordConfirm}
                    placeholder="비밀번호를 다시 입력해주세요"
                    className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]"
                  />
                </div>
                <img
                  src="https://i.ibb.co/mHg1TWV/Group.png"
                  alt="Group"
                  className="ml-2"
                />
              </div>
              <p className="message" style={{ color: 'red', fontSize: 7 }}>
                {passwordConfirmMessage}
              </p>


              {/* 업종 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg p-2">
                  <select className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" defaultValue="">
                    <option defaultValue={store} disabled hidden>업종을 선택해주세요</option>
                    <option defaultValue={store}>편의점</option>
                    <option defaultValue={store}>마트</option>
                  </select>
                </div>
              </div>

              {/* 가게 이름 */}
              <div className="mb-4">
                <div className=" bg-[#f3fffd] rounded-lg p-2">
                  <input type="storeName"
                    defaultValue={storeName}
                    onChange={onChangeStoreName}
                    placeholder="가게명을 입력해주세요" className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                </div>
              </div>

              {/* 가게 주소 1 */}
              <div className="mb-4">
                <div className=" bg-[#f3fffd] rounded-lg p-2">
                  <input type="place1"
                    defaultValue={place1}

                    placeholder="주소를 입력해주세요"
                    className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                </div>

                <button
                  onClick={handleButtonClick}
                  formAction=''
                  className="rounded-lg bg-[#15c3a7] p-2 text-base font-medium text-white w-full hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in"
                >
                  주소입력
                </button>
                {isModalOpen && (
                <div className="modal">
                  {/* <Place/> */}
                    {/* <Place company={company} setCompany={setCompany} /> */}

                </div>
            )}
              </div>





              {/* 가게 주소 2 */}
              <div className="mb-4">
                <div className=" bg-[#f3fffd] rounded-lg p-2">
                  <input type="place2" 
                    defaultValue={place2}

                    placeholder="상세 주소를 입력해주세요" className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                </div>
              </div>





              {/* 보내기 버튼 */}
              <div className="mb-4">
                <button
                  formAction=''
                  className="rounded-lg bg-[#15c3a7] p-2 text-base font-medium text-white w-full hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in"
                >
                  Register
                </button>
              </div>
                  
            </form> 

          </div>
        </div>
      </main>

    </div>
  )
}

export default Join