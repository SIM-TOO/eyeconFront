import axios from 'axios';


const url = process.env.REACT_APP_MASTER_URL;
// axios 인스턴스 생성
const TokenRefresher = axios.create({
  baseURL: `${url}`,
  withCredentials : true
//   timeout: 1000,
});

// 요청 인터셉터 추가
/* TokenRefresher.interceptors.request.use(
  config => {
     console.log('====================================');
    console.log("interceptors.request");
    console.log('===================================='); 
   
    return config;
  },
  error => {
    Promise.reject(error)
  }); */

// 응답 인터셉터 추가
TokenRefresher.interceptors.response.use((response) => {
  return response
}, function (error) {
  const originalRequest = error.config;
//   console.log('====================================');
//   console.log("!!!!!!!!!!!!",error.response.status);
//   console.log('====================================');
  if (error.response.status === 401) {
    // console.log("여긴왔어?")
    originalRequest._retry = true;
    axios.defaults.withCredentials=true;
    return axios.post(`${url}/auth/refresh`)
      .then(res => {
        // console.log('====================================');
        //     console.log("201 떳냐?",res.status);
        //     console.log('====================================');
        if (res.status === 201) {
            
          //localStorage.setItem('accessToken', res.data);
          return TokenRefresher(originalRequest);
        }
      })
  }
  return Promise.reject(error);
});

export default TokenRefresher;