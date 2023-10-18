import {Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import Join22 from './components/Join22'
import Place from './methodes/Place'
import './index.css';
import { useState } from 'react';
import { AddressContext } from './context/AddressContext';
import MainPageAfter from './components/MainPageAfter';

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
          <Route path="/join" element={<Join />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join22" element={<Join22/>}/>
          <Route path="/place" element={<Place/>}/>
       </Routes>
      </AddressContext.Provider>

      </div>
  );
}

export default App;
