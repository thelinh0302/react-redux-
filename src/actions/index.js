//tạo các state
import * as types from './../constants/actionTypes';

export const listAll = ()=>{
    return {
        type : types.List
    }
}
export const saveTask =(task)=>{
    return{
        type: types.saveTask,
        task //task : task
    } 
};
export const toggleForm = ()=>{
    return{
        type:types.Toggle_Form
    }
};
export const closeForm = ()=>{
    return{
        type:types.Close_Form
    }
};
export const openForm = ()=>{
    return{
        type:types.Open_Form
    }
}
export const updateStatus = (id)=>{
    return {
        type:types.Update_status_task,
        id:id
    }
}
export const deleteTasks = (id)=>{
    return{
        type:types.Delete_Task,
        id
    }
}
export const Edit_Item = (task)=>{
    return{
        type:types.Edit_Item,
        task
    }
}
export const Filter_Task=(filter)=>{ //filter :filtername filterStatus
    return{
        type:types.Filter_Table,
        filter
    }
}
export const SearchTask=(keyword)=>{
    return{
        type:types.Search,
        keyword
    }
}