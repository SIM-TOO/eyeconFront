import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import Place from './methodes/Place'
import './index.css';
import { useState } from 'react';
import { AddressContext } from './context/AddressContext';
import MainPageAfter from './components/MainPageAfter';
import ResultPage from './components/ResultPage';
import Gpttest1 from './components/testPage/Gpttest1';
import MainPageAfterPay from './components/MainPageAfterPay';
import MyPage from './components/MyPage';
import Payment from './components/payPage/Payment';


import { Provider } from 'react-redux';
import store from './store';


function App() {
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
        <AddressContext.Provider value={inAddressContext}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/place" element={<Place />} />
            <Route path='/ResultPage' element={<ResultPage />} />
            <Route path='/gpttest' element={<Gpttest1 />} />
            <Route path="/main" element={<MainPageAfter />} />
            <Route path='/mainpay' element={<MainPageAfterPay />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
        </AddressContext.Provider>
      </Provider>,
      document.getElementById('root')

    </div>
  );
}

export default App;
