import axios from "axios";

const useRemoveCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;
    axios.defaults.withCredentials = true;
    const removeCoin = async (email) => {
        try {
            const response = await axios.post(`${url}/coin/removeCoin`);
            if (response && response.data) {
                console.log(response);
                const coins = response.data;
                // 세션 스토리지에 데이터 저장
                sessionStorage.setItem('coinsData', JSON.stringify(coins));
                console.log("차감 후 세션에 저장된 coinsData : ", coins);
                return coins;

            }
        } catch (error) {
            console.error("에러 내용:", error);
        }
        return null;
    };

    return removeCoin;
};

export default useRemoveCoin;
