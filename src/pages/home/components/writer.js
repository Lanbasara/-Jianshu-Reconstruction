import React , { PureComponent } from 'react';
import {connect} from 'react-redux';
import {actioncreators} from '../store';
import {
  WriterWrapper,
  WriterName
} from '../style';
class Writer extends PureComponent {
  render(){
    const {list} = this.props;
    return(
      <div>
        {
          list.map((item)=>{
            return(
              <WriterWrapper key = {item.get('id')}>
            <img className = 'pic' src={item.get('imgUrl')}></img>
            <WriterName>
                <h3 className = 'title'>{item.get('title')}</h3>
                <p className = 'like' >{item.get('like')}</p>
            </WriterName>
          </WriterWrapper>
            )
          })
        }
     
      </div>
      
    )
  }
  componentDidMount(){
    this.props.getWriterInfo();
  }
}

const mapStateToProps = (state)=>({

  list : state.get('home').get('writerList'),

})

const mapDispatchToProps = (dispatch)=>({

  getWriterInfo(){
    dispatch(actioncreators.getWriterInfo())


  }

})





export default connect(mapStateToProps,mapDispatchToProps)(Writer);