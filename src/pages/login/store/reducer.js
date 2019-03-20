import {fromJS} from 'immutable';
import * as contants from './contants';

const defaultState = fromJS({
  title : ' ',
  login : false
});

export default (state = defaultState, action) => {
  switch(action.type){
     case contants.CHANGE_LOGIN_STATUS:
     return state.merge({
      login : action.value
     })
     case contants.CHANGE_LOGOUT:
     return state.merge({
      login : action.value
     })
    default:
      return state; 
  }
}