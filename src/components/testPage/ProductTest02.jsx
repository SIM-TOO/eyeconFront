import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

const ProductTest02 = () => {

    const [imageUrls, setImageUrls] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:5000/slice',{ 
            // beforeImgUrl은 result페이지에서 받아와야 됨
           beforeImgUrl : "https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/images%2F1699067778201?alt=media&token=ae991c1a-acf7-4ba9-8963-ba4d616ccb5f"})
        .then(response => { 
        const imageStrings = response.data;
        const urls = imageStrings.map(imageString => `data:image/jpeg;base64,${imageString}`);
        setImageUrls(urls);
        });
    }, []);    

    const canvas = new fabric.Canvas('canvas');
    
    // const product ={ '1':'https://i.ibb.co/v3mmYvJ/3-01.png',
    //             '2':'https://i.ibb.co/ThhcY4N/048-80.png',
    //             '3':'https://i.ibb.co/G0V0msy/33-01.png'
                
    // }

    
    // 배경설정
    const setBg = () =>{
    fabric.Image.fromURL('https://media.istockphoto.com/id/1269284290/ko/%EC%82%AC%EC%A7%84/%EB%B9%88-%EC%83%81%EC%A0%90-%EC%84%A0%EB%B0%98%EC%9D%B4%EC%9E%88%EB%8A%94-%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4%EA%B0%80-%EC%A1%B0%EB%A1%B1%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=nJGiNi42ZvU3MEtT-yzwDBJx2D-_Xam-mjlYMk1rvbM=', function (img) {
        // 이미지가 로드되면 캔버스의 배경으로 설정
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            // 필요한 경우 옵션을 설정
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });   
    var rect = new fabric.Rect({
        left: canvas.width*0,
        top: canvas.height*0,
        fill: 'rgba(255,255,255,0.5)',
        width: 400,
        height: canvas.height,
        selectable: false 
      });
      canvas.add(rect);
    //   canvas.renderAll();
}

const createProduct=()=>{
    // for(let i = 0; i < 10; i++) { // 10번 반복
        imageUrls.forEach((url) => {
            fabric.Image.fromURL(url, function(img) {
                // 필요한 경우 옵션을 설정
                img.set({
                    left: 100,
                    top: 100,
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
                // canvas.renderAll();
            });
        });  
    // }
}
    useEffect(() => {
        if (imageUrls.length > 0) {  // imageUrls 상태가 업데이트되었는지 확인합니다.
            setBg();
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
                <canvas id='canvas' width='1920' height='1080'></canvas>
            </div>
        </div>
    )
}

export default ProductTest02
