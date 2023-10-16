import React from 'react'

function Join() {
  return (
    <div>

      <header className=" text-white p-5">
        <div className="container mx-auto">
          <img src="https://i.ibb.co/7R0ySQh/logo.png" alt="logo" border="0"></img>
        </div>
      </header>

      <main className="container my-10 p-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="hidden md:flex items-center">
            <img src="https://i.ibb.co/hZwKssf/image.png" alt="image" border="0"></img>
          </div>

          <div className="mx-auto lg:p-12 lg:min-w-[600px] p-0 min-w-[300px]">

            <p className="text-3xl font-medium text-left text-black p-3">Sign Up</p>

            <div className=" mb-4">
              <div className=" bg-[#f3fffd] rounded-lg p-3">
                <input type="email" placeholder="이메일을 입력해주세요" className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <div className="bg-[#f3fffd] rounded-lg p-3 relative flex-1">
                <input
                  type="password"
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

            <div className="mb-4 flex items-center">
              <div className="bg-[#f3fffd] rounded-lg p-3 relative flex-1">
                <input
                  type="password"
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

            <div className="mb-4">
              <div className="bg-[#f3fffd] rounded-lg p-3">
                <select className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" defaultValue="">
                  <option value="" disabled hidden>업종을 선택해주세요</option>
                  <option value="store">편의점</option>
                  <option value="mart">마트</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <div className=" bg-[#f3fffd] rounded-lg p-3">
                <input type="storename" placeholder="가게명을 입력해주세요" className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
              </div>
            </div>

            <div className="mb-4">
              <button
                className="rounded-lg bg-[#15c3a7] p-3 text-base font-medium text-white w-full hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in"
              >
                Register
              </button>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default Join