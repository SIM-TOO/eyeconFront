import React from 'react'

const Intro03 = () => {
    return (
        <div>
            {/* 디자인용 박스*/}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-3 md:col-span-5" />
                <div className="col-span-6 md:col-span-2 border border-[#696c73] rounded-lg">
                    <p className="text-center whitespace-nowrap text-sm  md:text-2xl font-bold text-[#696c73] p-2">
                        OUR SERVICES
                    </p>
                </div>
                <div className="col-span-3 md:col-span-5" />
            </div>
        </div>
    )
}

export default Intro03