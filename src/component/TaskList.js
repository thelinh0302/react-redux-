import React,{Component} from 'react';
import TaskItem from './TaskItem';
import *as action from './../actions/index';
import {connect} from 'react-redux';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fliterName : '',
      fliterStatus : -1 // all -1 , active 1 ,deative : 0 
     };
    }
    

    // chức năng filter 
    onChange = (event)=>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      var filter={
        name:name === 'fliterName' ? value : this.state.fliterName,
        status:name === 'fliterStatus' ? value : this.state.fliterStatus
      };
      this.props.onFilterTable(filter)
      this.setState({
        [name] : value 
      });
      // console.log(this.state)
    }
  render() {
    var {todos,filterTable,keyWord} = this.props
    //chức năng filter
   if(filterTable.name){
     todos=todos.filter((task)=>{
       return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !==-1
     })
   }
  
     todos=todos.filter((task)=>{
        if(filterTable.status ===-1){ return task }
        else{
          return task.status === ( filterTable.status === 1 ? true :false );
        }
     })
     //chức năng search
      todos=todos.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !==-1
      })
    var element = todos.map((task,index)=>{ 
      return<TaskItem 
        key = {index} 
        index = {index} 
        task = {task} />
    })
    return (
        <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
      <tbody>
      <tr>
        <td />
          <td>
            <input
              name = 'fliterName'
              onChange = {this.onChange}
              value = {this.state.fliterName}        
              type="text" 
              className="form-control" />
          </td>
          <td>
            <select
              name = 'fliterStatus' 
              onChange = {this.onChange}
              value = {this.state.fliterStatus}
              className="form-control">
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
        <td />
      </tr>
      {element}
      </tbody>
      </table>
    );
  }
}
//lên store lấy dữ liệu về *
const mapStateToProp = (state)=>{
  return  {
    todos : state.tasks, //lấy task từ index reducers,
    filterTable:state.filterTable,
    keyWord:state.search,
  }
} ; //các state của store chuyển thành prop
const mapDispatchToprop=(dispatch,props)=>{
  return{
    onFilterTable:(filter)=>{
      dispatch(action.Filter_Task(filter))
    }
  }
}


export default connect(mapStateToProp,mapDispatchToprop) (TaskList);
