import axios from "axios";
import { TokenRefresherContext } from '../../context/TokenRefresherContext';
import { useContext } from "react";


const useGetCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;
    axios.defaults.withCredentials = true;
    const TokenRefresher = useContext(TokenRefresherContext);
    const getCoin = async () => {
        try {
           const response = await TokenRefresher.post(`${url}/coin/findCoin`); 
            if (response && response.data) {
                const coins = response.data;

                // 세션 스토리지에 데이터 저장
                sessionStorage.setItem('coinsData', JSON.stringify(coins));

                console.log("세션에 저장된 coinsData : ",coins);
                return response.data;
            }
        } catch (error) {
            console.error("에러 내용:", error);
        }
        return null;
    };

    return getCoin;
};

export default useGetCoin;
