import React , { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/writer';
import {actioncreators} from './store';
import {connect} from 'react-redux';
import Recommend from './components/Recommend';
import {
  HomeWrapper,
  Homeleft,
  Homeright,
  BackTop
} from './style'

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);

  }
  render(){
    return(
      <HomeWrapper>
        <Homeleft>
          <img alt = '' className = 'banner-img' src="https://alioss.gcores.com/uploads/focus_image/ce612164-4103-40a7-854c-d3cfbea340ca.jpg" ></img>
          <Topic></Topic>
          <List></List>
        </Homeleft>
        <Homeright>
          <Recommend></Recommend>
          <Writer></Writer>
        </Homeright>
        {this.props.showScroll?<BackTop onClick = {this.handleScrollTop}>返回顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomedata();
    this.bindEvents();
  }
  componentWillMount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapState = (state)=>({
  showScroll : state.getIn(['home','showScroll'])

})

const mapDispatch = (dispatch)=>({
  changeHomedata(){
    dispatch(actioncreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>400){
      dispatch(actioncreators.toggleTopShow(true));
    }else{
      dispatch(actioncreators.toggleTopShow(false));

    }

  }


})
export default connect(mapState,mapDispatch)(Home);