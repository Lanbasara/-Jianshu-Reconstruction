import React , { PureComponent } from 'react';
import {connect} from 'react-redux';
import {actioncreators} from '../store';
import {Link} from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMOre
} from '../style'
class List extends PureComponent {
  render(){
    const {list,getMoreList,page} = this.props;
    return(
      <div>
        {
          list.map((item,index)=>{
            return(
              <Link key = {index} to = {'/detail/' + item.get('id')}>
              <ListItem >
                <img alt = '' className = 'pic' src = {item.get('imgUrl')}></img>
                <ListInfo>
                    <h3 className = 'title'>{item.get('title')}</h3>
                    <p className = 'desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
                </Link>
            )
          })
        }
        <LoadMOre onClick = {()=>getMoreList(page)}>加载更多</LoadMOre>
      </div>

    )
  }
}

const mapStateToProps = (state)=>({

  list : state.get('home').get('articleList'),
  page : state.getIn(['home','articlePage'])

})
const mapDispatchToProps = (dispatch)=>({

  getMoreList(page){
    dispatch(actioncreators.getMoreList(page))


  }

})

export default connect(mapStateToProps,mapDispatchToProps)(List);