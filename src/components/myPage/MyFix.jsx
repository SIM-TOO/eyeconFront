import React from 'react'

const MyFix = () => {
    return (
        <div className='container mx-auto grid gird-cols-12 max-x screen-x'>
            <div className='col-span-12 grid gird-cols-12 rounded-[20px]' style={{
                background: "linear-gradient(161.83deg, #fff 27.62%, rgba(255,255,255,0) 125.16%)",
                boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
            }}>
                <div className='grid gird-cols-4'>
                    <p className="col-span-1 text-5xl font-bold text-center text-black">마이페이지</p>
                    <p className="col-span-1 text-xs font-medium text-left text-[#1f1f1f]/70">이메일 주소</p>
                    <p className="col-span-1 text-xs font-semibold text-left text-[#22242a]">Hello@gmail.com</p>
                    <p className="col-span-1 text-xs font-medium text-left text-[#1f1f1f]/70">변경할 비밀번호</p>
                </div>
                <div className="gird gird-cols-8 rounded-lg bg-white border border-gray-100 w-[10%] h-[20%]"
                    style={{ boxShadow: "2px 2px 1px 0 rgba(78,78,78,0.25)" }}
                />
                <p className="text-xs font-medium text-left text-[#1f1f1f]/70">변경할 비밀번호 확인</p>
                <div className="rounded-lg bg-white border border-gray-100 w-[10%] h-[20%]"
                    style={{ boxShadow: "2px 2px 1px 0 rgba(78,78,78,0.25)" }}
                />
                <div className="flex flex-col justify-start items-start gap-2.5 p-2.5">
                    <div
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-20 h-7 relative gap-2.5 px-5 py-[15px] rounded-md bg-[#15c3a7]"
                        style={{ boxShadow: "0px 2px 2px 0 rgba(49,49,49,0.25)" }}
                    >
                        <button className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-white">
                            수정하기
                        </button>
                    </div>
                </div>
                <div className='gird gird-cols-12 rounded-[20px] bg-[#13c7a8c]'>
                    <p className="text-base font-semibold text-left text-black">내 가게 1</p>
                    <p className="text-xs font-medium text-left text-[#1f1f1f]/70">매장명</p>
                    <p className="text-xs font-semibold text-left text-[#22242a]">맛있어요 편의점</p>
                    <p className="text-xs font-medium text-left text-[#1f1f1f]/70">업종 분류</p>
                    <div
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-20 h-7 relative gap-2.5 px-5 py-[15px] rounded-md bg-[#00306D]"
                        style={{ boxShadow: "0px 2px 2px 0 rgba(49,49,49,0.25)" }}
                    >
                        <button className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-white">
                            수정하기
                        </button>
                    </div>
                    <div className="w-[298px] h-11">
                        <div className="w-[298px] h-11">
                            <div className="w-[298px] h-11 absolute left-[23.5px] top-[139.5px] rounded-md border border-[#544c4c]/[0.14]" />
                            <p className="absolute left-[41px] top-[156px] text-xs font-medium text-left text-[#544c4c]">
                                소매업
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MyFix