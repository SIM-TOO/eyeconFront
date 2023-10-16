import {Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import './index.css';

function App() {
  
  return (
      <div className="App">

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />
       </Routes>

      </div>
  );
}

export default App;
