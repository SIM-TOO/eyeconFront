import axios from 'axios';

// axios 인스턴스 생성

const TokenRefresher = axios.create({
  baseURL: 'http://localhost:8023/EyeconSpring',
  withCredentials : true
//   timeout: 1000,
});

// 요청 인터셉터 추가
TokenRefresher.interceptors.request.use(
  config => {
    console.log('====================================');
    console.log("dd");
    console.log('====================================');
   /*  const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    } */
    return config;
  },
  error => {
    Promise.reject(error)
  });

// 응답 인터셉터 추가
TokenRefresher.interceptors.response.use((response) => {
  return response
}, function (error) {
  const originalRequest = error.config;
  console.log('====================================');
  console.log("!!!!!!!!!!!!",error.response.status);
  console.log('====================================');
  if (error.response.status === 401) {
    console.log("여긴왔어?")
    originalRequest._retry = true;
    axios.defaults.withCredentials=true;
    return axios.post('http://localhost:8023/auth/refresh')
      .then(res => {
        console.log('====================================');
            console.log("201 떳냐?",res.status);
            console.log('====================================');
        if (res.status === 201) {
            
          //localStorage.setItem('accessToken', res.data);
          return TokenRefresher(originalRequest);
        }
      })
  }
  return Promise.reject(error);
});

export default TokenRefresher;