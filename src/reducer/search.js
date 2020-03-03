//tạo chức năng dùng switch case 
import * as types from '../constants/actionTypes';


//tạo biến 
var initialState = '';
var myReducer = (state = initialState,action)=>{
    switch(action.type){
       case types.Search:
           return action.keyword
        default : return state;
    }
}

export default myReducer;