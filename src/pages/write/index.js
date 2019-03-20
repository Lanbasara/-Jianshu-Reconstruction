import React , { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class write extends PureComponent {
  render(){
    const {loginstatus}  = this.props;
    if(loginstatus){
      return(
        <div>write</div>
      )
    }else{
      return <Redirect to = '/login'/>

    }
    
  }
}

const mapState = (State)=>({
  loginstatus : State.getIn(['login','login'])
})

export default connect(mapState,null) (write);