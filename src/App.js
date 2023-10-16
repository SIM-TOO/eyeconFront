import { useSelector } from "react-redux"


function App() {
  let test = useSelector((state) => { return state } )
  return (
    <div>
    <p>{test.title}</p>
    <p>우리팀은 : {test.user}</p>
  </div>
  );
}

export default App;
