import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/login.json';

function UserImage() {
    return (
        <div>
            <div className="hidden md:flex items-center ml-40">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: '100%', maxWidth: '1000px' }}
                />
            </div>
        </div>
    )
}

export default UserImage