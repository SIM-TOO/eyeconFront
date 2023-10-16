import React from 'react'

const Login = () => {
    return (
        <div>

            <header className=" text-white p-5">
                <div className="container mx-auto">
                    <img src="https://i.ibb.co/7R0ySQh/logo.png" alt="logo" border="0"></img>
                </div>
            </header>

            <main className="container my-10 p-5 mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="hidden md:flex items-center">
                        <img src="https://i.ibb.co/hZwKssf/image.png" alt="image" border="0"></img>
                    </div>

                    <div className="mx-auto lg:p-12 lg:min-w-[600px] p-0 min-w-[300px]">

                        <p className="text-3xl font-medium text-left text-black p-3">Sign in</p>

                        <div className="mb-4">
                            <div className="bg-[#f3fffd] rounded-lg p-3 w-[340px]">
                                <input type="email" placeholder="Enter Email" className="bg-[#f3fffd] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7]" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1
                                    style={{'::placeholder': { color: '#009081' }}"
                                />
                            </div>
                            <p className="text-2 font-normal text-gray-400 w-[340px] text-right p-3">Forgot Password</p>
                        </div>



                        <div className="mb-4">
                            <button
                                className="rounded-lg bg-[#15c3a7] p-3 text-base font-medium text-white w-[340px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in"
                            >
                                Login
                            </button>
                        </div>

                    </div>
                </div>
            </main >

        </div >
    )
}

export default Login