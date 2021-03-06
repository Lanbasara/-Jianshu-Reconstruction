import * as actionTypes from './actiontypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  focused : false,
  list : [],
  page : 1,
  totalPage : 1,
  mouseIn : false

});
export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.SERACH_FOCUS : 
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR :
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST :
      return state.merge(
        {
          list :action.data,
          totalPage : action.totalPage
        }
      )
    case actionTypes.CHANGEMOUSEENTER :
      return state.set('mouseIn',true);
    case actionTypes.CHANGEMOUSELEAVE :
      return state.set('mouseIn',false);
    case actionTypes.CHANGEPAGE :
      return state.set('page',action.page);
    default:
      return state; 
  }
}