import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
})

const changewriterData = (result) => ({
  type: constants.CHANGE_WRITER_DATA,
  writerList: result.writerList,
})

const addHomeList = (list,nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list : fromJS(list),
  nextPage,

})

export const getWriterInfo = ()=>{
  return (dispatch) => {
    axios.get('/api/writerList.json').then((res)=>{
      const result = res.data.data;
      const action = changewriterData(result);
      dispatch(action);
    });
  }
}

export const getHomeInfo = ()=>{
  return (dispatch) => {
    axios.get('/api/homedata.json').then((res)=>{
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  }
}


export const getMoreList = (page)=>{
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' +page).then((res)=>{
      const result = res.data.data;
      const action = addHomeList(result,page+1);
      dispatch(action);
    })
  }
}

export const toggleTopShow = (show)=>({
  type : constants.TOGGLE_SCROLL_SHOW,
  show,
})