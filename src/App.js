
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state=>state))
  return (
    <div className="App">
      <h2>value is: {count}</h2>
      <div>
        <button onClick={(e)=>dispatch({type:"INC"}) }>+</button>
        <button onClick={(e)=>dispatch({type:"DEC"}) }>-</button>
      </div>
      
    </div>
  );
}

export default App;
