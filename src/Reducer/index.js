// index.js ma sirf aik reducer rhe ga baki 
// ap dosre file ma muiltiple reducer create krsakyte ha 


import ChangeTheNo from "./incDec";

// combined them 
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    ChangeTheNo
});

export default RootReducer;

// Now add into Store 
