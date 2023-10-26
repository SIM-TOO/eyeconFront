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
import { Provider, useSelector } from 'react-redux';
import store from './store';


function App() {

  const loginCKData = useSelector((state) => state.accessCK);



  return (
    <div className="App">
      <Provider store={store}>
        <TokenRefresherContext.Provider value={TokenRefresher}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gpttest" element={<Gpttest1 />} />
            {loginCKData === 'Exist' ? (
              <>
                <Route path="/join" element={<MainPage />} />
                <Route path="/login" element={<MainPage />} />
                <Route path="/pay" element={<MainPage />} />
                <Route path="/place" element={<Place />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/main" element={<MainPageAfter />} />
                <Route path="/mainpay" element={<MainPageAfterPay />} />
                <Route path="/mypage" element={<MyPage />} />
              </>
            ) :
              <>
                <Route path="/join" element={<Join />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/place" element={<Login />} />
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
