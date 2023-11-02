import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { TokenRefresherContext } from '../../context/TokenRefresherContext';
const Test = () => {

    const [img, setImg] = useState([]);


    const url = process.env.REACT_APP_MASTER_URL;
    axios.defaults.withCredentials = true;
    const TokenRefresher = useContext(TokenRefresherContext);
    const printImg = async () => {
        try {
            const response = await TokenRefresher.get(`${url}/flask/printImg`);
            console.log(response.data);
            setImg(response.data)

        } catch (error) {
            console.error("에러 내용:", error);
        }
    }



    useEffect(() => {
        printImg();

    }, [])



    return (
        <div>
            <h1>이미지 출력 / 다운로드 테스트</h1>
            <div>
                <h3>이미지1</h3>
                {/* <img src={img.beforeimg} /> */}
                {img.length > 0 && img[0].beforeimg && (
                <>
                    <img src={img[0].beforeimg} alt="Image" />
                    <a href={img[0].beforeimg} download="image.jpg">
                        <button>Download Image</button>
                    </a>
                </>
            )}

            </div>



        </div>
    )
}
export default Test