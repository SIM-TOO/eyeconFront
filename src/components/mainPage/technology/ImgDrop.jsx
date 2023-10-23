import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function ImgDrop({ onUploadSuccess, uploadedImage, uploadedImageSend, onUploadComplete }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [beforeimg, setBeforeimg] = useState(null);

  // 이미지가 띄워진 상태 확인
  useEffect(() => {
    if (uploadedImage === null) {
      setImageSrc(null);
    }
  }, [uploadedImage]);


  // 이미지 서버로 업로드
  useEffect(() => {
    if (uploadedImageSend) {
      const url = process.env.REACT_APP_MASTER_URL;
      const formData = new FormData();

      // 이미지의 실제 데이터
      formData.append('Base64Data', uploadedImage);

      // 이미지 이름 데이터
      formData.append('beforeimg', beforeimg);

      // 이상없음
      // console.log(formData.get('Base64Data'));
      // console.log(formData.get('beforeimg'));

      axios.post(`${url}/test.do`, formData)
        .then(response => {
          // 전송 성공
          console.log("전송 성공");
          onUploadComplete(true);
        })
        .catch(error => {
          // 전송 실패
          console.error("전송을 실패 했습니다 에러 내용 :", error);
          onUploadComplete(false);
        });
    }
  }, [uploadedImageSend]);

  const onDrop = useCallback((acceptedFiles) => {
    // 이미지 미리보기 설정
    const file = acceptedFiles[0];
    setBeforeimg(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
      if (onUploadSuccess) {
        onUploadSuccess(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  // 업로드 파일 조건 
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // 한 번에 여러 파일을 받을 수 없도록 설정
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },  // 이미지만 허용
  });


  return (
    <div {...getRootProps()} className="col-span-12 p-3 border-2 border-gray-300 rounded-md hover:border-blue-500 cursor-pointer h-[100%] flex items-center justify-center">
      {/* 이미지 업로드 박스 */}
      <input {...getInputProps()} />
      {
        imageSrc ?
          <div className="w-full h-72 flex items-center justify-center">
            <img src={imageSrc} alt="Uploaded Preview" className="max-h-full object-contain" />
          </div>
          :
          <>
            <p className="hidden md:block opacity-50 font-medium text-[#190e61]">
              이미지를 드래그를 통해
              <br />
              이곳에 위치시키세요
            </p>
            <p className="block md:hidden opacity-50 font-medium text-[#190e61]">
              클릭해서 업로드 해주세요
            </p>
          </>
      }
    </div>
  );
}

export default ImgDrop;


