import {Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import UserJoin from './components/UserJoin'
import Pay from './components/Pay'
function App() {
  
  return (
      <div className="App">

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<UserJoin />} />
          <Route path="/pay" element={<Pay />} />
       </Routes>

      </div>
  );
}

export default App;
