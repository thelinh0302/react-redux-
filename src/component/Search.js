import React,{Component} from 'react';
import *as action from './../actions/index';
import { connect } from 'react-redux';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword : ''
        };
    }
    onChange = (event)=>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      })
    }
    onSearch =()=>{
      this.props.onSearch(this.state.keyword)
    }
    render() {
      
      return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <div className="input-group">
                    <input
                      name = 'keyword'
                      value = {this.state.keyword}
                      onChange = {this.onChange}
                      type="text" 
                      className="form-control" 
                      placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                    <button
                      onClick = {this.onSearch} 
                      className="btn btn-primary" 
                      type="submit">
                    <span className="fa fa-search mr-5" />Tìm
                    </button>
                    </span>
                </div>
            </div>
         
        
      );
    }
  }
  // const mapStateToProp = (state)=>{
  //   return  {
      
  //   }
  // } ; //các state của store chuyển thành prop
  const mapDispatchToprop=(dispatch,props)=>{
    return{
      onSearch:(keyword)=>{
        dispatch(action.SearchTask(keyword))
      }
    }
  }
  
  export default connect(null,mapDispatchToprop) (Search);
  