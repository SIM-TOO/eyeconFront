import {Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import './index.css';
import { useState } from 'react';
// import { AddressContext } from './context/AddressContext';

function App() {
// const [company, setCompany] = useState({})  
// // postContext에 담길 데이터  
// const AddressContext={
//   // 주소
//   company : company,
//   setCompany:setCompany
// }

  return (
      <div className="App">
      {/* <AddressContext.Provider value={AddressContext}> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />
       </Routes>
      {/* </AddressContext.Provider> */}

      </div>
  );
}

export default App;
