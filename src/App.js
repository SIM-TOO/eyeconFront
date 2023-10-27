import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import Place from './methodes/Place'
import './index.css';

import MainPageAfter from './components/MainPageAfter';
import ResultPage from './components/ResultPage';
import Gpttest1 from './components/testPage/Gpttest1';
import MainPageAfterPay from './components/MainPageAfterPay';
import MyPage from './components/MyPage';
import { TokenRefresherContext } from './context/TokenRefresherContext';
import TokenRefresher from './hook/userPage/TokenRefresher';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setAccessCK } from './store/accessCKSlice';
import store from './store';

function App() {

  const loginCKData = useSelector((state) => state.accessCK);
  const storedCoins = localStorage.getItem('coinsData');
  const dispatch = useDispatch();
  if (storedCoins == null) {

  }
  if (loginCKData !== 'Exist') {
    if (storedCoins !== null) {
      dispatch(setAccessCK('Exist'));
    }
  }

  //console.log("현재 리덕스 값",loginCKData)

  return (
    <div className="App">
      <Provider store={store}>
        <TokenRefresherContext.Provider value={TokenRefresher}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gpttest" element={<Gpttest1 />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/place" element={<Place />} />

            {loginCKData === 'Exist' ? (
              <>
                <Route path="/join" element={<MainPage />} />
                <Route path="/login" element={<MainPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/main" element={<MainPageAfter />} />
                <Route path="/mainpay" element={<MainPageAfterPay />} />
                <Route path="/mypage" element={<MyPage />} />
              </>
            ) :
              <>
                <Route path="/join" element={<Join />} />
                <Route path="/login" element={<Login />} />
                <Route path="/result" element={<Login />} />
                <Route path="/main" element={<Login />} />
                <Route path="/mainpay" element={<Login />} />
                <Route path="/mypage" element={<Login />} />
              </>
            }

          </Routes>
        </TokenRefresherContext.Provider>
      </Provider>

    </div>
  );
}

export default App;
