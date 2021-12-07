import { useSelector, useDispatch } from "react-redux"
import {incNo , DeNo} from './action/index';
const App = () => {
  // useSelector same as consumer in (useContext)
  const myState = useSelector((state) => state.ChangeTheNo);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1> Incremen / Decrement </h1>
        <h4> Using Redux</h4>

        <button onClick={() => dispatch(incNo())}><span> + </span></button>

        <input type="text" name="quantity" className="quantity_input" value={myState} />
        <button onClick={() => dispatch(DeNo())}><span> - </span></button>
      </div>

    </>
  )
}

export default App;
