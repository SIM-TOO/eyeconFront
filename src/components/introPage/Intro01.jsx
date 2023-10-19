import React from 'react'

const Intro01 = () => {
    return (
        <div>
            <div className="w-64 md:w-auto">
                <img src="https://i.ibb.co/0YBkn3z/service.png" alt="intro1" className="h-auto pointer-events-none" />
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">


                <div className="col-span-6">
                    <div className="box md:absolute md:top-40">내용1</div>
                    <div className="box">빈박스</div>
                    <div className="box">내용2</div>
                </div>
                <div className="col-span-6 md:block hidden">
                    <img src="https://i.ibb.co/CBj6Kn6/Group-624891.png" alt="intro2" className="h-auto pointer-events-none" />
                </div>
            </div>
        </div>
    )
}

export default Intro01