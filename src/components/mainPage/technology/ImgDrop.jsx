import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import axios from 'axios';

function ImgDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    const url = process.env.REACT_APP_MASTER_URL;
    console.log("이미지 업로드 시도");
   

    // 이미지 서버로 업로드
    const formData = new FormData();
    formData.append('beforeimg', acceptedFiles[0].path);  // 파일 경로를 'beforeimg' 키로 추가

    // 테스트 출력
    console.log("이미지의 정보는 : ", formData);
    console.log("이미지의 이름 정보는 : ", formData.get('beforeimg'));

    try {
      axios.post(`${url}/test.do`, formData);
    } catch (error) {
      console.error("전송을 실패 했습니다 에러 내용 :", error);
    }

  }, []);

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
      <p className="opacity-50 font-medium text-[#190e61]">
        이미지를 드래그를 통해
        <br />
        이곳에 위치시키세요
      </p>
    </div>
  );
}

export default ImgDrop;