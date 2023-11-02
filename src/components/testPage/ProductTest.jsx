import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas');

    // 첫 번째 이미지 로드
    fabric.Image.fromURL('https://img.danawa.com/prod_img/500000/763/904/img/904763_1.jpg?_v=20200616095718', function(img) {
      img.set({
        left: 0,
        top: 0,
        angle: 0,
        padding: 10,
        cornersize: 10,
        hasRotatingPoint:true,
        selectable: true
      });

      img.scaleToWidth(200);
      img.scaleToHeight(200);
      canvas.add(img).setActiveObject(img);
    });

    // 두 번째 이미지 로드
    fabric.Image.fromURL('https://msimage.lottechilsung.co.kr/goods/31/12/84/93/16580_N_N_600.jpg', function(img) {
      img.set({
        left: 300, // 이미지가 겹치지 않게 위치 조정
        top: 0,
        angle: 0,
        padding: 10,
        cornersize: 10,
        hasRotatingPoint:true,
        selectable: true
      });

      img.scaleToWidth(200);
      img.scaleToHeight(200);
      canvas.add(img).setActiveObject(img);
    });
    fabric.Image.fromURL('https://media.istockphoto.com/id/1430303467/ko/%EC%82%AC%EC%A7%84/%EC%97%B0%EC%B2%A0-%EB%AA%A8%EB%85%B8%EA%B7%B8%EB%9E%A8%EA%B3%BC-%EA%B2%80%EC%9D%80-%ED%99%A9%EA%B8%88-%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4%EA%B0%80%EC%9E%88%EB%8A%94-%EB%B9%88-%EB%82%98%EB%AC%B4-%EB%B2%BD-%EC%84%A0%EB%B0%98-%EC%A0%95%EB%A9%B4%EB%B3%B4%EA%B8%B0-%EC%B2%9C%EC%97%B0-%EC%86%8C%EC%9E%AC%EC%9D%98-%EB%82%98%EB%AC%B4-%EC%84%A0%EB%B0%98%EC%9D%98-%ED%98%84%EC%8B%A4%EC%A0%81%EC%9D%B8-%EC%84%B8%ED%8A%B8-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9A%94%EC%86%8C-%ED%99%88-%EA%B0%80%EA%B5%AC.jpg?s=170667a&w=0&k=20&c=4O1tXY_plembNT9yHC-3gj1tHjWI4uLYwhAAh7IIhWA=', function(img) {
      img.set({
        left: 300, // 이미지가 겹치지 않게 위치 조정
        top: 0,
        angle: 0,
        padding: 10,
        cornersize: 10,
        hasRotatingPoint:true,
        selectable: false
      });

      img.scaleToWidth(200);
      img.scaleToHeight(200);
      canvas.add(img).setActiveObject(img);
    });
    canvas.renderAll();
  }, []);

  return (
    <div className="App">
      <canvas id="canvas" width="1000" height="900">

      </canvas>
      <div >1231231456465</div>
      <canvas width="1000" height="900"></canvas>
    </div>
  );
}

export default App;
