import React , { Component } from 'react';
import {
  RecommendWrapper,
  Recommenditem1,
  Recommenditem2,
  Recommenditem3,
  Recommenditem4,
  Recommenditem5

} from '../style';
class Recommend extends Component {
  render(){
    return(
      <RecommendWrapper>
        <Recommenditem1></Recommenditem1>
        <Recommenditem2></Recommenditem2>
        <Recommenditem3></Recommenditem3>
        <Recommenditem4></Recommenditem4>
        <Recommenditem5></Recommenditem5>
      </RecommendWrapper>
    )
  }
}

export default Recommend;