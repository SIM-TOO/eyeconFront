import { useSelector } from "react-redux"
import MainPage from './components/MainPage'


function App() {
  let test = useSelector((state) => { return state } )
  return (
    <div>
    <header> <p>1번</p> <p>2번</p> <p>3번</p> <p>3번</p> </header>

    <MainPage/>
    


    <p>{test.title}</p>
    <p>우리팀은 : {test.user}</p>
    
    
 
 
  </div>


  );
}

export default App;
