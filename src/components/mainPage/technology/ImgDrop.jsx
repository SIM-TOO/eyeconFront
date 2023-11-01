import axios from 'axios';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import firebaseApp from "../../../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { TokenRefresherContext } from '../../../context/TokenRefresherContext';


function ImgDrop({ onUploadSuccess, uploadedImage, uploadedImageSend, onUploadComplete }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageStyle, setImageStyle] = useState("w-auto h-full");
  axios.defaults.withCredentials = true;
  const TokenRefresher = useContext(TokenRefresherContext);
  useEffect(() => {
    if (uploadedImage === null) {
      setImageSrc(null); // 업로드된 이미지가 없으면 미리보기 이미지 초기화
      return; // 이미지가 없으면 더 이상 진행하지 않음
    }
    if (uploadedImageSend) {

      console.log("이미지 전송 코드 실행")
      // 파이어 베이스 스토리지 가져오기
      const storage = getStorage(firebaseApp);
      console.log('이미지 센드', uploadedImageSend);
      // 백엔드 서버 URL 가져오기
      const url = process.env.REACT_APP_MASTER_URL;
      // 이미지 데이터
      console.log("이미지 데이터", uploadedImage);


      // 파이어 베이스
      let beforeimgUrl;
      const imageRef = ref(storage, `images/${Date.now()}`);
      // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
      const beforeimg = async () => {
        const snapshot = await uploadBytes(imageRef, uploadedImage);
        const result = await getDownloadURL(snapshot.ref);
        console.log('result', result);
        beforeimgUrl = result;
      }

      const sendImage = async () => {
        await beforeimg();
        const resultImage = await TokenRefresher.post(`${url}/flask/sendImg`, { 'beforeimg': beforeimgUrl })
          .then(response => {
            console.log("전송 성공");
            onUploadComplete(true);
            return response.data;
          })
          .catch(error => {
            console.log("전송을 실패 했습니다 에러 내용 :", error);
            onUploadComplete(false);
            return null
          });

        console.log("결과물 : ", resultImage)
        let base64Image = resultImage; // 여기에 실제 base64 데이터를 넣으세요.

        // base64 데이터를 Blob 객체로 변환
        let fetchResponse = await fetch(base64Image);
        let blob = await fetchResponse.blob();

        imageRef.put(blob).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        // resultImage.then(data => {
        //   if (data !== null) {
        //     // 데이터가 유효한 경우 로컬 스토리지에 저장 등의 처리를 수행합니다.
        //     console.log("resultImage : ", data);
        //     // localStorage.setItem('resultImageData', data);
        //   } else {
        //     // 데이터가 실패한 경우 로컬 스토리지에 저장하지 않습니다.
        //     // 또는 필요한 다른 처리를 수행합니다.
        //   }
        // })


      }

      sendImage();


      console.log("결과물 : ", resultImage)
      resultImage.then(data => {
        if (data !== null) {
          // 데이터가 유효한 경우 로컬 스토리지에 저장 등의 처리를 수행     
          localStorage.setItem('resultImageData', data);
        } else {
          // 데이터가 실패한 경우 로컬 스토리지에 저장하지 않습니다.
          // 또는 필요한 다른 처리를 수행합니다.
        }
      })


    }
  }, [TokenRefresher, onUploadComplete, uploadedImage, uploadedImageSend]);


  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];   // *************** 요놈을 파이어베이스에 보내야합니다만 위 useEffect로 보내려니 코드 해석이 빡쎄요

    // 미리보기용 이미지 URL
    const imageURL = URL.createObjectURL(file);
    setImageSrc(imageURL);

    const image = new Image();
    image.src = file;

    // 이미지 가로 세로 비율을 조정하여 박스에 출력
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
      // 이미지 파일을 전달
      onUploadSuccess(file);
    }
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
            <p className="hidden md:block opacity-50 font-medium text-[#190e61] dark:text-[#FFFFFF]">
              이미지를 드래그를 통해
              <br />
              이곳에 위치시키세요
            </p>
            <p className="block md:hidden opacity-50 font-medium text-[#190e61] dark:text-[#FFFFFF]">
              클릭해서 업로드 해주세요
            </p>
          </>
      }
    </div>
  );
}

export default ImgDrop;

