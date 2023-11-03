import { Routes, Route } from 'react-router-dom';
import { TokenRefresherContext } from './context/TokenRefresherContext';
import TokenRefresher from './hook/userPage/TokenRefresher';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setAccessCK } from './store/accessCKSlice';
import { AddressContext } from './context/AddressContext';
import { useState } from 'react';
import store from './store';
import './index.css';

// 페이지 컴포넌트
import IntroPage from './pages/IntroPage';
import Login from './pages/Login'
import Join from './pages/Join'
import Pay from './pages/Pay'

// 페이지 컴포넌트
import MainPageAfter from './components/MainPageAfter';
import ResultPage from './components/ResultPage';
import MainPageAfterPay from './components/MainPageAfterPay';
import MyPage from './components/MyPage';
import CoinCheck from './components/payPage/CoinCheck';

// 기능 컴포넌트
import Place from './methodes/Place'

// 테스트 컴포넌트
import Test from './components/testPage/Test';
import ProductTest from './components/testPage/ProductTest';
import ProductTest02 from './components/testPage/ProductTest02';


function App() {

  // 로그인 상태 확인 & 코인 상태 확인
  const loginCKData = useSelector((state) => state.accessCK);
  const storedCoins = localStorage.getItem('coinsData');
  const dispatch = useDispatch();
  if (loginCKData !== 'Exist') {
    if (storedCoins !== null) {
      dispatch(setAccessCK('Exist'));
    }
  }
  //console.log("현재 리덕스 값",loginCKData)

  const [company, setCompany] = useState({})
  // postContext에 담길 데이터  
  const inAddressContext = {
    // 주소
    company: company,
    setCompany: setCompany
  }

  return (
    <div className="App">
      <Provider store={store}>
        <TokenRefresherContext.Provider value={TokenRefresher}>
          <AddressContext.Provider value={inAddressContext}>
            <Routes>
              {/* 기본적으로 접근 가능한 페이지 */}
              <Route path="/" element={<IntroPage />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/place" element={<Place />} />
              <Route path="/coincheck" element={<CoinCheck />} />

              {loginCKData === 'Exist' ? (
                <>
                  {/* 로그인 정보 있을 경우 접근 가능 */}
                  <Route path="/join" element={<IntroPage />} />
                  <Route path="/login" element={<IntroPage />} />
                  <Route path="/result" element={<ResultPage />} />
                  <Route path="/main" element={<MainPageAfter />} />
                  <Route path="/mainpay" element={<MainPageAfterPay />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/producttest" element={<ProductTest />} />
                  <Route path="/producttest02" element={<ProductTest02 />} />

                </>
              ) :
                <>
                  {/* 로그인 정보 없을 경우 접근 불가능 로그인 페이지로 우회 */}
                  <Route path="/join" element={<Join />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/result" element={<Login />} />
                  <Route path="/main" element={<Login />} />
                  <Route path="/mainpay" element={<Login />} />
                  <Route path="/mypage" element={<Login />} />



                </>
              }
            </Routes>
          </AddressContext.Provider>
        </TokenRefresherContext.Provider>
      </Provider>

    </div>
  );
}

export default App;
