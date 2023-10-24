import axios from "axios";

const useCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;
                            //HeaderAfter에서 email 가져옴
    const getCoinInfo = async (email) => {
        try {
            console.log( { 'email': email });
            const response = await axios.get(`${url}/user/removeCoin`,  { 'email': "wlghd9958@Naver.com" });
            if (response && response.data) {
                console.log(response)
                return response.data.coin;
            }
        } catch (error) {
            console.error("에러 내용:", error);
        }
        return null;
    };

    return getCoinInfo;
};

export default useCoin;
