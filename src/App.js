import {Routes, Route } from 'react-router-dom';
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
import MainPageAfterTest from './components/MainPageAfterTest';
import Gpttest1 from './components/testPage/Gpttest1';

function App() {
const [company, setCompany] = useState({})  
// postContext에 담길 데이터  
const inAddressContext={
  // 주소
  company : company,
  setCompany:setCompany
}

  return (
      <div className="App">
      <AddressContext.Provider value={inAddressContext}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPageAfter />} />
          <Route path="/maintest" element={<MainPageAfterTest />} />
          <Route path="/join" element={<Join />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place" element={<Place/>}/>
          <Route path='/ResultPage' element={<ResultPage/>} />
          <Route path='/gpttest' element={<Gpttest1/>} />
       </Routes>
      </AddressContext.Provider>

      </div>
  );
}

export default App;
