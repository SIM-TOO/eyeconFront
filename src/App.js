import {Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import UserJoin from './components/UserJoin'

function App() {
  
  return (
      <div className="App">

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<UserJoin />} />
       </Routes>

      </div>
  );
}

export default App;
