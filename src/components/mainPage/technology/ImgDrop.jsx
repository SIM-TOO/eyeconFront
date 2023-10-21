import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

function ImgDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    // 여기에서 파일을 처리하거나 업로드 할 수 있습니다.
    // 예: acceptedFiles[0]은 첫 번째 파일입니다.

    console.log("업로드 될까?")
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
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