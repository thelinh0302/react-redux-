//tạo chức năng dùng switch case 
import * as types from '../constants/actionTypes';


//tạo biến 
var initialState = false;
var myReducer = (state = initialState,action)=>{
    switch(action.type){
       case types.Toggle_Form:
           return !state
        case types.Open_Form:
            return true
        case types.Close_Form:
            return false
        default : return state;
    }
}
export default myReducer;