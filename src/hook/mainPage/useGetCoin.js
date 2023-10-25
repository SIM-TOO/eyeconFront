import axios from "axios";

const useGetCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;
    axios.defaults.withCredentials = true;
    const getCoin = async (email) => {
        try {
           const response = await axios.post(`${url}/coin/findCoin`); 
            if (response && response.data) {
                console.log(response);
                return response.data;
                // const num = 9999;
                // return num;
            }
        } catch (error) {
            console.error("에러 내용:", error);
        }
        return null;
    };

    return getCoin;
};

export default useGetCoin;
