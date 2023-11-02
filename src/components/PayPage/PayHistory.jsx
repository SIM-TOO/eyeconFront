import React from 'react'

const PayHistory = ({ paymentHistory }) => {
    return (
        <div className="font-Pretendard text-center container grid grid-cols-12 p-3 gap-4">

            {/* 여백용 박스 */}
            <div className="col-span-12 p-3" />

            {/* 타이틀 */}
            <h2 className="text-2xl font-semibold mb-4 col-span-12">결제 내역</h2>

            {/* 여백용 박스 */}
            <div className='col-span-1' />
            {/* 내역박스 */}
            <div className='col-span-10 grid grid-cols-12 gap-3'>
                <hr className="col-span-12 my-4" />
                <div className="col-span-6 md:col-span-2">날짜</div>
                <div className="col-span-6 md:col-span-2">시간</div>
                <div className="col-span-12 md:col-span-2">상품명</div>
                <div className="col-span-4 md:col-span-2">코인 개수</div>
                <div className="col-span-4 md:col-span-2">금액</div>
                <div className="col-span-4 md:col-span-2">결제 방식</div>
                <hr className="col-span-12 my-4" />

                {/* Map함수 */}
                {paymentHistory.map((payment, index) => (
                    <>
                        <div key={index} className="text-gray-500 col-span-6 md:col-span-2">{payment.date}</div>
                        <div className="text-gray-500 col-span-6 md:col-span-2">{payment.time}</div>
                        <div className="text-gray-600 col-span-12 md:col-span-2">{payment.coinId === 0 ? "BASIC" : payment.coinId === 1 ? "PREMIUM" : payment.coinId === 2 ? "PRO" : ""}</div>
                        <div className="text-gray-600 col-span-4 md:col-span-2">{payment.coin}</div>
                        <div className="text-gray-600 col-span-4 md:col-span-2">{payment.price}</div>
                        <div className="text-gray-600 col-span-4 md:col-span-2">{payment.finance}</div>
                        <hr className="col-span-12 my-4" />
                    </>
                ))}
            </div>

            {/* 여백용 박스 */}
            <div className='col-span-1' />
        </div >
    )
}
export default PayHistory