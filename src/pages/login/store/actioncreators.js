import axios from 'axios';
import * as contants from './contants';

const changeloginstatus = () =>({
  type:contants.CHANGE_LOGIN_STATUS,
  value : true
})


export const logout = () =>({
  type:contants.CHANGE_LOGOUT,
  value : false
})



export const login = (account , password)=> {
  return (dispatch)=>{
    axios.get('/api/loginstatus.json?account='+account+'&password='+password).then((res) =>{
      const result = res.data.data;
      if(result){
        dispatch(changeloginstatus());
      }
      else{
        alert('登陆失败')
      }
    })
  }
}
