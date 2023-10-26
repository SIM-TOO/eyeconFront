import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function ImgDrop({ onUploadSuccess, uploadedImage, uploadedImageSend, onUploadComplete }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [beforeimg, setBeforeimg] = useState(null);
  const [imageStyle, setImageStyle] = useState("w-auto h-full");

  useEffect(() => {
    if (uploadedImage === null) {
      setImageSrc(null);
      return; // 이미지가 없으면 더 이상 진행하지 않음
    } if (uploadedImageSend) {

      // 이미지가 있으며, 전송 버튼을 클릭한 경우 실행
      const url = process.env.REACT_APP_MASTER_URL;
      const formData = new FormData();

      // 이미지의 실제 데이터
      formData.append('Base64Data', uploadedImage);

      // 이미지 이름 데이터
      formData.append('beforeimg', beforeimg);

      // 이상없음
      console.log(formData.get('Base64Data'));
      console.log(formData.get('beforeimg'));

      // 서버 통신용
      // 반환값 Base64Data로 줄것!(중요)
      // ex
      const resultImage = axios.post(`${url}/test.do`, formData)
        .then(response => {
          // 전송 성공
          console.log("전송 성공");
          onUploadComplete(true);
          return response.data;
        })
        .catch(error => {
          // 전송 실패
          console.error("전송을 실패 했습니다 에러 내용 :", error);
          onUploadComplete(false);
          return null
        });

        


      console.log("결과물 : ", resultImage)
      resultImage.then(data => {
        if (data !== null) {
          // 데이터가 유효한 경우 로컬 스토리지에 저장 등의 처리를 수행합니다.
          localStorage.setItem('resultImageData', data);
        } else {
          // 데이터가 실패한 경우 로컬 스토리지에 저장하지 않습니다.
          // 또는 필요한 다른 처리를 수행합니다.
        }
      })


    }
  }, [uploadedImage, uploadedImageSend, beforeimg, onUploadComplete]);


  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setBeforeimg(file.name);
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);

      const image = new Image();
      image.src = event.target.result;

      image.onload = () => {
        const boxRatio = 1;  // 박스의 비율
        const imageRatio = image.width / image.height;

        if (imageRatio > boxRatio) {
          setImageStyle("w-full h-auto");
        } else {
          setImageStyle("w-auto h-full");
        }
      }

      if (onUploadSuccess) {
        onUploadSuccess(event.target.result);
      }
    };

    reader.readAsDataURL(file);
  }, [onUploadSuccess]);

  // 업로드 파일 조건 
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // 한 번에 여러 파일을 받을 수 없도록 설정
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },  // 이미지만 허용
  });

  return (
    <div {...getRootProps()} className="col-span-12 border-2 border-gray-300 rounded-md hover:border-blue-500 cursor-pointer h-[100%] flex items-center justify-center">
      <input {...getInputProps()} />
      {
        imageSrc ?
          <div style={{ maxWidth: '25rem', maxHeight: '25rem', width: '25rem', height: '25rem' }} className="flex items-center justify-center overflow-hidden">
            <img src={imageSrc} alt="Uploaded Preview" className={imageStyle} />
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

