//tạo chức năng dùng switch case 
import * as types from './../constants/actionTypes';
var s4 = ()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
 var generateID=()=>{
    return s4()+ s4()+'-' + s4()+'-'+s4();
  }
var findIndex = (tasks,id)=>{
    var result = -1;
    tasks.forEach((task,index)=>{
      if(task.id === id){
        result = index;
      }
    });
    return result;
    // console.log(id);
  }
  var index = '';
  var id = -1;
var data = JSON.parse(localStorage.getItem('tasks'))
//tạo biến 
var initialState = data ? data :[];
var myReducer = (state = initialState,action)=>{
    switch(action.type){
      //hiển thị danh sách 
        case types.List :
            return state;
      //thêm và cập nhật danh sách 
        case types.saveTask:
           var Task ={
               id:action.task.id,
               name : action.task.name,
               status : action.task.status 
           };
           if(!action.task.id){
              action.task.id= generateID();
              state.push(Task);
           }else{
            index = findIndex(state,action.task.id);
            state[index]=Task;
           }
           
           localStorage.setItem('tasks',JSON.stringify(state));
           return [...state];
        //update status
        case types.Update_status_task:
               id=action.id;
              index = findIndex(state,id);
                // state[index].status=!state[index].status;
                var cloneTask ={...state[index]}
                cloneTask.status=!cloneTask.status;
                state[index]=cloneTask;
              localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        //delete danh sách
        case types.Delete_Task:
                 id = action.id;
                index = findIndex(state,id);
                state.splice(index,1);
                localStorage.setItem('tasks',JSON.stringify(state))
            return[...state]
        default : return state;
    }
}
export default myReducer;
// tạo  clone task mới = clone  task cũ và status =!status 
// xóa task cũ (splice ) =>(push) task mới 