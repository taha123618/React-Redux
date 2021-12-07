// perform kise krna ha 
// kise krna a inc and decrement 
// better go with initialSate takee value change na ho 
const initialState = 0;
const ChangeTheNo = (state = initialState , action ) =>{

    // kia type ha inc ha ya dec 
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;    
        default: return state;
    }
}

export default ChangeTheNo;