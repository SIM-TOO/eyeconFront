import { Routes, Route } from 'react-router-dom';
import { TokenRefresherContext } from './context/TokenRefresherContext';
import TokenRefresher from './hook/userPage/TokenRefresher';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setAccessCK } from './store/accessCKSlice';
import { AddressContext } from './context/AddressContext';
import { useState } from 'react';
import store from './store/store';
import './index.css';

// 페이지 컴포넌트
import Intro from './pages/Intro';
import Login from './pages/Login'
import Join from './pages/Join'
import Pay from './pages/Pay'
import Main from './pages/Main';
import ResultPage from './pages/ResultPage';
import MyPage from './pages/MyPage';
import MainPay from './pages/MainPay';

// ??
import CoinCheck from './components/payPage/CoinCheck';

// 기능 컴포넌트
import Place from './methodes/Place'

// 테스트 컴포넌트
import Test from './components/testPage/Test';
import ProductTest from './components/testPage/ProductTest';
import ProductTest02 from './components/testPage/ProductTest02';
import ProductTest03 from './components/testPage/ProductTest03';
import ResultList from './components/resultPage/ResultMoveList';
import ResultMoveList from './components/resultPage/ResultMoveList';


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
  const [storeName, setStoreName] = useState([])
  // postContext에 담길 데이터  
  const inAddressContext = {
    // 주소
    company: company,
    setCompany: setCompany,
    // 가게이름
    storeName : storeName,
    setStoreName : setStoreName
  }

  return (
    <div className="App">
      <Provider store={store}>
        <TokenRefresherContext.Provider value={TokenRefresher}>
          <AddressContext.Provider value={inAddressContext}>
            <Routes>
              {/* 기본적으로 접근 가능한 페이지 */}
              <Route path="/" element={<Intro />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/place" element={<Place />} />
              <Route path="/coincheck" element={<CoinCheck />} />

              {loginCKData === 'Exist' ? (
                <>
                  {/* 로그인 정보 있을 경우 접근 가능 */}
                  <Route path="/join" element={<Intro />} />
                  <Route path="/login" element={<Intro />} />
                  <Route path="/result" element={<ResultPage />} />
                  <Route path="/product" element={<ResultMoveList />} />
                  <Route path="/main" element={<Main />} />
                  <Route path="/mainpay" element={<MainPay />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/producttest02" element={<ProductTest02 />} />
                  
                  {/* 테스트 용 나중에 삭제 필요 */}
                  <Route path="/test" element={<Test />} />
                  <Route path="/producttest" element={<ProductTest />} />    
                  <Route path="/producttest03" element={<ProductTest03 />} />

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
