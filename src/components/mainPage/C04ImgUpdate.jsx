import React, { useState } from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import ImgDrop from "./technology/ImgDrop";


const C04ImgUpdate = ({ handleButtonClick }) => {

  // 실제 이미지
  const [uploadedImage, setUploadedImage] = useState(null);

  // 이미지 전송 확인용
  const [uploadedImageSend, setUploadedImageSend] = useState(null);

  // 이미지 업로드 성공시 실행되는 함수
  const handleImageUploadComplete = (success) => {
    if (success) {
      handleButtonClick(5);
    } else {
      //  실패시 작동하는 곳
      alert("업로드에 실패 했습니다. 그러나 넘어가게 할것입니다. 나중에 수정하세요!")
      handleButtonClick(5);
    }
  };

  return (
    <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      {/* 내용 박스 */}
      <div className="col-span-12 md:col-span-10 p-7"
      >
        {uploadedImage === null ?
          (
            <p className="text-center text-black text-xl ">
              시선 분석을 위해서 매장의 매대 사진을 드롭 박스에 업로드 해주세요.
            </p>
          ) :
          (
            <p className="text-center text-black text-xl">
              이미지 업로드 버튼을 누르면 시선분석이 진행됩니다.
            </p>
          )
        }
      </div>
      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      {/* 로봇 */}
      <div className=" hidden md:block md:col-span-5">
        <Robot />
      </div>

      {/* 이미지 내용 박스 */}
      <div className="h-[100%] col-span-12 md:col-span-5 grid grid-cols-12 flex items-center justify-center">
        {!uploadedImage &&  // uploadedImage가 null이 아닐 경우만 표시
          <>
            {/* 이미지 */}
            <div className="col-span-12 md:col-span-4 flex justify-center w-[50%] md:w-[100%] md:ml-0 ml-[90px]">
              <img src="https://i.ibb.co/ZSfF5Bb/Kakao-Talk-20231023-104406363.png" alt="매대이미지" className="mx-auto" />
            </div>
            {/* 내용 */}
            <div className="col-span-12 md:col-span-8 p-3 text-base text-center text-black">
              <p className="font-bold text-xl">
                업로드 이미지 형식</p>
              <p className="font-medium">
                매대가 잘 보이는 이미지 <br />
                여백이 없는 이미지
              </p>
            </div >
          </>
        }
        {/* 이미지 드랍 함수 */}
        <ImgDrop
          onUploadSuccess={(image) => setUploadedImage(image)}
          //실제 이미지 업로드 파일
          uploadedImage={uploadedImage}
          uploadedImageSend={uploadedImageSend}
          onUploadComplete={handleImageUploadComplete}
        />
      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 버튼박스 */}
      {uploadedImage === null ?
        (<>
          <div className="col-span-1 md:col-span-2 p-3" />
          <div className="col-span-2 md:col-span-2 p-3" />
          <div className="col-span-1 md:col-span-2 p-3" />
        </>)
        :
        (<>
          <div className="col-span-1 md:col-span-2" />
          <button className="mt-10 inline-block shadow-sm shadow-blue-500/50 col-span-5 md:col-span-3 bg-gray-600 p-3 font-semibold text-white rounded-xl"
            onClick={() => setUploadedImage(null)}><svg className="inline-block mr-3 w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            이전 단계로

          </button>
          <div className="col-span-1 md:col-span-2" />
          <button className="mt-10 inline-block col-span-5 md:col-span-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg rounded-lg p-3 font-semibold text-white rounded-xl"

            onClick={() => setUploadedImageSend(true)}>
            <div className='inline-block'>이미지 업로드</div><svg className="inline-block ml-5 w-5 text-white dark:text-white animate-pulse " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
          <div className="col-span-1 md:col-span-2" />
        </>)
      }

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-12" />
    </div>
  )
}

function Robot() {
  return (
    <Lottie
      className='translate3d-10-55-0 animate-wiggle'
      loop
      animationData={lottieJson}
      play
    />
  );
}


export default C04ImgUpdate