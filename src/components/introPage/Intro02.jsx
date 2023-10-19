import React from 'react'

const Intro02 = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">
            <div className="col-span-6">
                <div className="box">2번쨰 컴포넌트</div>
                <div className="box">내용</div>
                <div className="box">내용2</div>
            </div>
            <div className="col-span-6 md:block hidden">
              두번쨰 그림
            </div>
        </div>
    )
}

export default Intro02