//tạo chức năng dùng switch case 
import * as types from '../constants/actionTypes';


//tạo biến 
var initialState = {
    name: '',
    status: -1
};
var myReducer = (state = initialState,action)=>{
    switch(action.type){
       case types.Filter_Table:
           return{
               name:action.filter.name,
               status:parseInt(action.filter.status)
           };
        
        default : return state;
    }
}
export default myReducer;