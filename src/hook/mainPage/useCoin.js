import axios from "axios";

const useCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;

    const getCoinInfo = async (email) => {
        try {
            const response = await axios.get(`${url}/user/getCoin`, { params: { email: email } });
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
