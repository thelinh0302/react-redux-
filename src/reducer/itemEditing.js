//tạo chức năng dùng switch case 
import * as types from '../constants/actionTypes';


//tạo biến 
var initialState = {
    id : '',
    name : '',
    status : false
};
var myReducer = (state = initialState,action)=>{
    switch(action.type){
       case types.Edit_Item :
         return state
    default : return state;
    }
}
export default myReducer;