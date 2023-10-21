import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/login.json';

function UserImage() {
    return (
        <div>
            <div className="hidden md:flex items-center ml-40 ">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    option={{ speed: 0.2 }}
                    style={{ width: '100%', maxWidth: '1000px' }}
                    className='absolute top-20 left-0'
                />
            </div>
        </div>
    )
}

export default UserImage