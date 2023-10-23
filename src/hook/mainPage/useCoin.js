import axios from "axios";

const useCoin = () => {

// const userInfo = localStorage.getItem("key")  // 일단 토큰 값 가져오기

    const removeCoin = async (event) => {
        axios.post(`${url}/user/useCoin`, {email: "example@example.com"});
        
    }

    return null;
}


export default useCoin;