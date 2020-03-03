import React,{Component} from 'react';
import {connect} from 'react-redux';
import *as action from './../actions/index';
class TaskItem extends Component {
  onUpdateSendItem = ()=>{
   this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = ()=>{
    this.props.onDelete(this.props.task.id)
    this.props.onCloseForm();
  }
  onEditTask = () =>{
    console.log(this.props.task)
    this.props.onEditTask(this.props.task)
    this.props.onOpenForm();
  }
  render() {
    var {task,index} = this.props
    return (
    <tr>
        <td> {index+1} </td>
        <td> {task.name} </td>
        <td 
          className="text-center">
            <span 
            onClick = {this.onUpdateSendItem}
            className= {task.status === true ? 'label label-success' : 'label label-danger'}>
            {task.status === true ? 'Kich hoat' : 'Chua kich hoat'}
            </span>
        </td>
        <td className="text-center">
          <button
            onClick ={this.onEditTask}
             type="button" 
             className="btn btn-warning">
          <span className="fa fa-pencil mr-5" />Sửa
          </button>
          &nbsp;
          <button 
            onClick = {this.onDelete}
            type="button" 
            className="btn btn-danger">
          <span className="fa fa-trash mr-5" />Xóa
          </button>
        </td>
    </tr>
    );
  }
}
const mapStateToProp = state=>{
  return{}
}
const mapDispatchToProp = (dispatch,props)=>{
  return{
    onUpdateStatus : (id)=>{
      dispatch(action.updateStatus(id));
    },
    onDelete :(id)=>{
      dispatch(action.deleteTasks(id));
    },
    onCloseForm :()=>{
      dispatch(action.closeForm());
    },
    onOpenForm:()=>{
      dispatch(action.openForm())
    },
    onEditTask:(task)=>{
      dispatch(action.Edit_Item(task))
    }
  }
}
export default connect(mapStateToProp,mapDispatchToProp) (TaskItem);
