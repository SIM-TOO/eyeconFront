import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

const ProductTest02 = () => {

    const [imageUrls, setImageUrls] = useState([]);
    // useEffect(() => {
    //     axios.post('http://localhost:5000/slice',{ 
    //         // beforeImgUrl은 result페이지에서 받아와야 됨
    //        beforeImgUrl : "https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/images%2F1699067778201?alt=media&token=ae991c1a-acf7-4ba9-8963-ba4d616ccb5f"})
    //     .then(response => { 
    //     const imageStrings = response.data;
    //     const urls = imageStrings.map(imageString => `data:image/jpeg;base64,${imageString}`);
    //     setImageUrls(urls);
    //     });
    // }, []);    

    const canvas = new fabric.Canvas('canvas');
    
  
    // 배경설정
//     const setBg = () =>{
//     fabric.Image.fromURL('https://media.istockphoto.com/id/1269284290/ko/%EC%82%AC%EC%A7%84/%EB%B9%88-%EC%83%81%EC%A0%90-%EC%84%A0%EB%B0%98%EC%9D%B4%EC%9E%88%EB%8A%94-%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4%EA%B0%80-%EC%A1%B0%EB%A1%B1%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=nJGiNi42ZvU3MEtT-yzwDBJx2D-_Xam-mjlYMk1rvbM=', function (img) {
//         // 이미지가 로드되면 캔버스의 배경으로 설정
//         canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
//             // 필요한 경우 옵션을 설정
//             scaleX: canvas.width / img.width,
//             scaleY: canvas.height / img.height
//         });
//     });   
//     var rect = new fabric.Rect({
//         left: canvas.width*0,
//         top: canvas.height*0,
//         fill: 'rgba(255,255,255,0.5)',
//         width: 400,
//         height: canvas.height,
//         selectable: false 
//       });
//       canvas.add(rect);
//     //   canvas.renderAll();
// }

    // 상품 이미지 생성될 공간
    const eventory = () =>{
        fabric.Image.fromURL('https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/planogram%2F%EA%B2%A9%EC%9E%90.png?alt=media&token=9fff1474-9297-495c-88e0-dfb9182f71bb', function(img) {
            img.set({
              left: 0,
              top: 0,
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: false,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            img.scaleToWidth(400);
            img.scaleToHeight(canvas.height);
            // canvas.add(img).setActiveObject(img);
            canvas.add(img);
            canvas.sendToBack(img); // 이미지를 캔버스의 가장 아래 레이어로 보냄
          });
    }

    const showCase = ()=>{
        fabric.Image.fromURL('https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/planogram%2FKakaoTalk_20231104_144127727.png?alt=media&token=af772986-fde3-4dee-b409-af24700a0dcf', function(img) {
            img.set({
              left: 800,
              top: 0,
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: false,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            img.scaleToWidth(400);
            img.scaleToHeight(canvas.height);
            // canvas.add(img).setActiveObject(img);
            canvas.add(img);
            canvas.sendToBack(img); // 이미지를 캔버스의 가장 아래 레이어로 보냄
          });
    }
    

    const createProduct = () => {
        let row = 0;
        let col = 0;
      
        imageUrls.forEach((url, index) => {
          fabric.Image.fromURL(url, function(img) {
            // 필요한 경우 옵션을 설정
            img.set({
              left: 20 + col * 60, // 이미지의 가로 위치를 조정
              top: 40+row * 99, // 이미지의 세로 위치를 조정
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: true,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            // 이미지 크기 조정
            img.scaleToWidth(100);
            img.scaleToHeight(100);
      
            // 캔버스에 이미지 추가
            canvas.add(img);
      
            // 다음 이미지의 위치를 계산
            col += 1;
            if (col >= 7) {
              col = 0;
              row += 1;
              if(row>=8){
                col=0;
                row=0;
              }
            }
          });
        });
      };

    useEffect(() => {
        if (imageUrls.length > 0) {  // imageUrls 상태가 업데이트되었는지 확인합니다.
            // setBg();
            eventory();
            showCase();
            createProduct();
        }
    }, [imageUrls]);  // 의존성 배열에 imageUrls를 추가합니다

    useEffect( () => {        
        
        
        
        canvas.renderAll();
        // canvas.renderAll();

    },[]);


    return (
        <div>
            <div>ProductTest02</div>
            <div>
                <canvas id='canvas' width='1920'  height='880'></canvas>
            </div>
        </div>
    )
}

export default ProductTest02
