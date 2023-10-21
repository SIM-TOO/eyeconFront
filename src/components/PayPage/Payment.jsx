import React, { useEffect } from 'react'
import axios from 'axios';

const Payment = () => {
    useEffect(() => {
      const jquery = document.createElement("script");
      jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
      const iamport = document.createElement("script");
      iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
      document.head.appendChild(jquery);
      document.head.appendChild(iamport);
      return () => {
        document.head.removeChild(jquery);
        document.head.removeChild(iamport);
      };
    }, []);
  
    const requestPay = () => {
      const { IMP } = window;
      IMP.init('imp54472174');
  
      IMP.request_pay({
        pg : 'nice.iamport00m',   
        pay_method : 'card', 
        merchant_uid: 'merchant_' + new Date().getTime(), //상점에서 생성한 고유 주문번호
        name : '주문명:결제테스트',
        amount : 1004, // 가격
        company : '상호명',//해당 파라미터 설정시 통합결제창에 해당 상호명이 노출됩니다.  // 코인아이디/ 가격/ 상품명 / 개수
        buyer_email : 'test@portone.io',
        buyer_name : '구매자이름',
        buyer_tel : '010-1234-5678',
        buyer_addr : '서울특별시 강남구 삼성동',
        buyer_postcode : '123-456',
        language : 'ko', // en 설정시 영문으로 출력되면 해당 파라미터 생략시 한국어 default
        // m_redirect_url : '{모바일에서 결제 완료 후 리디렉션 될 URL}',
        auth_mode:'key-in' // 키인결제(일회성 결제)이용시 설정 
      }, async (rsp) => {
        try {
          console.log(rsp);
          
          const { data } = await axios.post('http://localhost:8087/verify/' + rsp.imp_uid);
          if (rsp.paid_amount === data.response.amount) {
            console.log("결제 성공");
            let today = new Date();
            // 결제시간 년월일 구하기
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() + 1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            // 결제시간 시분초 구하기
            let hours = ('0' + today.getHours()).slice(-2); 
            let minutes = ('0' + today.getMinutes()).slice(-2);
            let seconds = ('0' + today.getSeconds()).slice(-2); 

            let timeString = hours + ':' + minutes  + ':' + seconds;
            let dateString = year + '-' + month  + '-' + day;
            axios.post("http://localhost:8087/verify/completed",{
              // 코인아이디(식별키) + 개수
              impUid:rsp.imp_uid,
              amount:rsp.paid_amount,
              coinName:rsp.name,
              userId:"D0762C37ABA1453EB2650C564B20BCB2",
              number:rsp.card_number,
              finance:rsp.card_name,
              date: dateString,
              time: timeString
          }).then(function(response){
            console.log("/order/completed 성공")
          }).catch(function(error){
            console.log("/order/completed 실패")
          })
          } else {
            alert('결제 실패');
          }
        } catch (error) {
          console.error('Error while verifying payment:', error);
          alert('결제 실패');
        }
      });
    };
  
    return (
      <div>
        <button onClick={requestPay}>결제하기</button>
      </div>
    );
  };

export default Payment
