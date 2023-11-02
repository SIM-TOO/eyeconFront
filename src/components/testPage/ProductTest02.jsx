import React, { useEffect } from 'react';
import { fabric } from 'fabric';

const ProductTest02 = () => {
    const canvas = new fabric.Canvas('canvas');
    
    const product ={ '1':'https://img.danawa.com/prod_img/500000/763/904/img/904763_1.jpg?_v=20200616095718',
                '2':'https://msimage.lottechilsung.co.kr/goods/31/12/84/93/16580_N_N_600.jpg',
                
    }


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
}

  const createProduct=()=>{
    Object.keys(product).forEach((key) => {
        fabric.Image.fromURL(product[key], function(img) {
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
            img.scaleToWidth(200);
            img.scaleToHeight(200);
    
            // 캔버스에 이미지 추가
            canvas.add(img);
        });
    });  
    
  }


    useEffect(() => {        
        setBg();
        createProduct();

    }, []);

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
