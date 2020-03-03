import React,{Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import  { connect } from 'react-redux';
import *  as actions from './actions/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
     
      keyWord : ''
    };
  }
  // luu localstorage vao mang tasks

  displayButton = ()=>{
    // if(this.state.isDisplayForm && this.state.taskEdit !==null){
    //   console.log('th1');
    //   this.setState ({
    //     isDisplayForm : true,
    //     taskEdit : null
    //   })
    // }else{
    //   this.setState ({
    //     isDisplayForm : !this.state.isDisplayForm,
    //     taskEdit : null
    //   })
    // }
    this.props.onToggleForm()
   
  }
  // onCloseForm = ()=>{
  //   this.setState({
  //     isDisplayForm : false
  //   })
  // }
  // onShowForm = ()=>{
  //   this.setState({
  //     isDisplayForm : true
  //   })
  // }
  // onReceiveForm1 = (data)=>{
  //   var taskReceiveFormData = this.state.tasks;
  //   if(data.id === ''){
  //     data.id=this.generateID();
  //     taskReceiveFormData.push(data);
  //   }else{
  //     var index = this.findIndex(data.id);
  //     taskReceiveFormData[index] = data
  //   }
  //   this.setState({
  //     tasks:taskReceiveFormData,
  //     taskEdit : null
  //   })
  //   localStorage.setItem('taskReceiveFormData13',JSON.stringify(taskReceiveFormData))
  // }
  // findIndex = (id)=>{
  //   var taskIndex = this.state.tasks;
  //   var result = -1;
  //   taskIndex.forEach((task,index)=>{
  //     if(task.id === id){
  //       result = index;
  //     } 
  //   });
  //   return result;
  //   // console.log(id);
  // }
  // onUpdate=(id)=>{
  //   var {tasks} = this.state;
  //   var index = this.findIndex(id);
  //   var taskEditing =tasks[index]
  //   this.setState({
  //     taskEdit : taskEditing
  //   });
  //   this.onShowForm();
  // }
  //chức năng filter
  render() {
    
    return (
<div>
  <div className="container">
    <div className="text-center">
      <h1>Quản Lý Công Việc</h1>
    <hr />
    </div>
    <div className="row">
      <TaskForm />;
      <div className= {this.props.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
        <button type="button" onClick = {this.displayButton} className="btn btn-primary">
          <span className="fa fa-plus mr-5"  />Thêm Công Việc
        </button>
        <div className="">
          <Control onSearch = {this.onSearch} />
        </div>
          <div className="">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}
const mapStateToProp = state=>{
  return{
    isDisplayForm : state.isDisplayForm
   };
}
const mapDispatchToProp = (dispatch,props)=>{
  return {
    onToggleForm : ()=>{
      dispatch(actions.toggleForm())
    }
  };
}
export default connect(mapStateToProp,mapDispatchToProp) (App);
