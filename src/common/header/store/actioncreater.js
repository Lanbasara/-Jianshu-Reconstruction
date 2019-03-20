import * as actionTypes from './actiontypes';
import {fromJS} from 'immutable';
import axios from 'axios';


const ChangeList = (data) => ({
  type : actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage : Math.ceil(data.length/10)
})


export const searchFocus = () => ({
  type :actionTypes.SERACH_FOCUS
})

export const searchBlur = () => ({
  type : actionTypes.SEARCH_BLUR
})


export const changemouseenter = () => ({
  type : actionTypes.CHANGEMOUSEENTER
})


export const changemouseleave = () => ({
  type : actionTypes.CHANGEMOUSELEAVE
})

export const changepage = (page) => ({
  type : actionTypes.CHANGEPAGE,
  page
})




export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then((res)=>{
      const data = res.data;
      dispatch(ChangeList(data.data));
    })
    .catch(()=>{
      console.log(123)
    })

  }
}

