import React,{Component} from 'react';
import  { connect } from 'react-redux';
import *as action from './../actions/index';
class taskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id : '',
        name : '',
        status : false
      };
  }
  componentDidMount(){
    if(this.props.itemEditing){
      this.setState({
        id:this.props.itemEditing.id,
        name:this.props.itemEditing.name,
        status:this.props.itemEditing.status,

      })
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.itemEditing){
      this.setState({
        id:nextProps.itemEditing.id,
        name:nextProps.itemEditing.name,
        status:nextProps.itemEditing.status,
      })
    }else if(!nextProps.itemEditing){
      this.setState({
        id : '',
        name : '',
        status : false
      })
    }
  }
  onCloseForm = () =>{
    this.props.onCloseForm();
  }
  onHandleChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    });
  }
  onHandlSubmit = (event) =>{
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
   this.onCloseForm()
  }
  onClear = ()=>{
    this.setState({
      id: '',
      name : '',
      status:false
    })
  }
  render() {
    var {id} = this.state
    if(!this.props.isDisplayForm) return'';
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {id !== '' ? 'sửa công việc' : 'Thêm Công Việc'}
            <span
                onClick = {this.onCloseForm}
                className = "fa fa-times-circle text-right"
            ></span>
            </h3>
           
          </div>
          <div className="panel-body">
            <form onSubmit = {this.onHandlSubmit}>
              <div className="form-group">
                <label>Tên :</label>
                <input 
                  type="text"
                  value = {this.state.name}
                  onChange = {this.onHandleChange}
                  name = "name" 
                  className="form-control" />
              </div>
              <label>Trạng Thái :</label>
              <select 
                  className="form-control" 
                  name = "status"
                  value = {this.state.status}
                  onChange = {this.onHandleChange}
                 >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                <button 
                  type="submit"
                  onClick = {this.onClear} 
                  className="btn btn-danger">Hủy Bỏ</button>
            </div>
            </form>
          </div>
        </div>
      </div>
  
    );
  }
}
const mapStateToProp = state=>{
  return {
    isDisplayForm : state.isDisplayForm,
    itemEditing : state.itemEditing

  }
};
const mapDispatchToProps = (dispatch,props)=>{
  return {
    onSaveTask : (task)=>{ //la 1 props
      dispatch(action.saveTask(task));
    },
    onCloseForm :()=>{
      dispatch(action.closeForm())
    }
  }
}
export default connect(mapStateToProp,mapDispatchToProps)  (taskForm);
