import {fromJS} from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  topicList : [],
  articleList : [],
  articlePage : 1,
  writerList : [],
  showScroll : false

});

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.CHANGE_WRITER_DATA:
      return state.merge({
        writerList :  fromJS(action.writerList),
      })
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList : fromJS(action.topicList),
        articleList : fromJS(action.articleList)
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList : state.get('articleList').concat(action.list),
        articlePage : action.nextPage
      })
    case constants.TOGGLE_SCROLL_SHOW:
      return state.merge({
        showScroll : action.show
      })
    default:
      return state; 
  }
}