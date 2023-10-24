import axios from "axios";

const useRemoveCoin = () => {
    const url = process.env.REACT_APP_MASTER_URL;

    const removeCoin = async (email) => {
        try {
            const response = await axios.post(`${url}/user/removeCoin`, { email: email });
            if (response && response.data) {
                console.log(response);
                
                return response.data;

            }
        } catch (error) {
            console.error("에러 내용:", error);
        }
        return null;
    };

    return removeCoin;
};

export default useRemoveCoin;
