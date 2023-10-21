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
    accept: 'image/*'  // 이미지만 허용
  });

  return (
    <div {...getRootProps()} className="border-2 border-gray-300 rounded-md p-4 hover:border-blue-500 cursor-pointer">
      <input {...getInputProps()} />
      <p>드래그 & 드롭하거나 클릭하여 이미지를 업로드하세요.</p>
    </div>
  );
}

export default ImgDrop;