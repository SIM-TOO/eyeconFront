import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

function App() {
  useEffect(() => {   
      const canvas = new fabric.Canvas('canvas');

      // 캔버스의 너비와 높이의 20%, 40%를 계산합니다.
      const left = canvas.width * 0.3;
      const top = canvas.height * 0;

      // 선의 길이를 10cm로 설정합니다. 웹에서 1cm는 대략 37.8픽셀입니다.
      const length = 10 * 100;

      const line = new fabric.Line([left, top, left, top+length], {
          stroke: 'black',
          selectable: false 
      });

      canvas.add(line);

      // 진열대 이미지
      fabric.Image.fromURL('https://media.istockphoto.com/id/1430303467/ko/%EC%82%AC%EC%A7%84/%EC%97%B0%EC%B2%A0-%EB%AA%A8%EB%85%B8%EA%B7%B8%EB%9E%A8%EA%B3%BC-%EA%B2%80%EC%9D%80-%ED%99%A9%EA%B8%88-%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4%EA%B0%80%EC%9E%88%EB%8A%94-%EB%B9%88-%EB%82%98%EB%AC%B4-%EB%B2%BD-%EC%84%A0%EB%B0%98-%EC%A0%95%EB%A9%B4%EB%B3%B4%EA%B8%B0-%EC%B2%9C%EC%97%B0-%EC%86%8C%EC%9E%AC%EC%9D%98-%EB%82%98%EB%AC%B4-%EC%84%A0%EB%B0%98%EC%9D%98-%ED%98%84%EC%8B%A4%EC%A0%81%EC%9D%B8-%EC%84%B8%ED%8A%B8-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9A%94%EC%86%8C-%ED%99%88-%EA%B0%80%EA%B5%AC.jpg?s=170667a&w=0&k=20&c=4O1tXY_plembNT9yHC-3gj1tHjWI4uLYwhAAh7IIhWA=', function(img) {
        img.set({
          left: canvas.width *0.32, // 이미지가 겹치지 않게 위치 조정
          top: canvas.height *0,
          angle: 0,
          padding: 10,
          cornersize: 10,
          hasRotatingPoint:true,
          selectable: false
        });
  
        img.scaleToWidth(800);
        img.scaleToHeight(800);
        canvas.add(img).setActiveObject(img);
      });

    // 첫 번째 상품 이미지 로드
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

    // 두 번째 상품 이미지 로드
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
    canvas.renderAll();

    // 이미지 충돌시 옆으로 밀리게 하는 함수
    canvas.on('object:moving', function (e) {
        var obj = e.target;
    
        // 구역의 위치와 크기를 설정
        var zone = { left: 700, top: 200, width: canvas.width*0.4, height: 200 };
    
        // 객체의 중심 위치를 계산
        var objCenter = { x: obj.left + obj.width / 2, y: obj.top + obj.height / 2 };
    
        // 객체와 구역 사이의 거리를 계산
        var dx = zone.left + zone.width / 2 - objCenter.x;
        var dy = zone.top + zone.height / 2 - objCenter.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
    
        // 거리가 특정 값 이하면 객체를 구역으로 이동
        if (distance < 50) {
            obj.set({
                left: zone.left,
                top: zone.top
            });
        }
    });

    canvas.on('object:moving', function (e) {
        var obj = e.target;
    
        canvas.forEachObject(function (targ) {
            if (targ === obj || !targ.selectable) return; // selectable이 false인 객체는 제외
    
            // 객체의 경계 상자를 가져옴
            var objBbox = obj.getBoundingRect();
            var targBbox = targ.getBoundingRect();
    
            // 경계 상자가 겹치는지 확인
            if (objBbox.left < targBbox.left + targBbox.width &&
                objBbox.left + objBbox.width > targBbox.left &&
                objBbox.top < targBbox.top + targBbox.height &&
                objBbox.top + objBbox.height > targBbox.top) {
    
                // 겹치는 폭을 계산
                var overlapX = Math.min(objBbox.left + objBbox.width, targBbox.left + targBbox.width) - 
                               Math.max(objBbox.left, targBbox.left);
                var overlapY = Math.min(objBbox.top + objBbox.height, targBbox.top + targBbox.height) - 
                               Math.max(objBbox.top, targBbox.top);
    
                // 겹치는 부분이 이미지의 30% 이상인지 확인
                if (overlapX * overlapY >= 0.3 * obj.getScaledWidth() * obj.getScaledHeight()) {
                    // 겹친 객체를 이동
                    targ.set({
                        left: targ.left + overlapX/10,
                        // top: targ.top + overlapY/10
                    });
                }
            }
        });
    });
    
    canvas.on('object:modified', function (e) {
        var obj = e.target;
        // 객체가 움직임을 멈출 때 originalState를 초기화
        obj.originalState = null;
    });
    //마우스 누른게 앞으로 오게하는 메소드
    canvas.on('mouse:down', function (e) {
        var obj = canvas.getActiveObject();
        if (obj) {
            obj.bringToFront();
        }
    })

  }, []);

  return (
    <div className="App">
        <h1>플래노그램</h1>
        <div>
      <canvas id="canvas" width='1920' height='1080' ></canvas>

        </div>
    </div>
  );
}

export default App;
