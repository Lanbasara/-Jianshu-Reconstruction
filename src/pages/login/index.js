import React , { PureComponent } from 'react';
import {LoginWrapper,Loginbox,Input,Button} from './style';
import {connect} from 'react-redux';
import {actioncreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
  render(){
    const {loginstatus}  = this.props;
    if(!loginstatus){
      return(
        <LoginWrapper>
          <Loginbox>
            <div>
            <Input placeholder = '账号' ref = {(input)=>{this.account = input}}/>
            <Input placeholder = '密码' type ='password'  ref= {(input)=>{this.password = input}}/>
            </div>
            <Button onClick = {()=>this.props.login(this.account,this.password)}>登陆</Button>
          </Loginbox>
          
        </LoginWrapper>
      )
    }else{
      return <Redirect to = '/'/>

    }
    
  }
}

const mapState = (State)=>({
  loginstatus : State.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
  login(accountElem,passwordElm){
    dispatch(actioncreators.login(accountElem.value,passwordElm.value))

  }
})
export default connect(mapState,mapDispatch) (Login);