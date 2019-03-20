import React,{Component}  from 'react';
import { CSSTransition } from 'react-transition-group';
import  {SearchInfoList,SearchInfonItem,SearchInfoswitch,SearchInfotitle,SearchInfo,HeaderWrapper,Logo,Nav,NavItem,NavSearch, Addition, Button , SearchWrapper} from  './style'
import {connect} from 'react-redux';
import {actioncreater} from './store';
import {actioncreators as loginActioncreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';
class Header extends Component{
    getListArea(){
        const {totalPage,handlePagechange,mouseIn,handelMouseleave,focused,list,page,handelMouseenter} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = ((page-1)*10); i < page*10;i++){
                pageList.push(
                    <SearchInfonItem key={newList[i]} >{newList[i]}</SearchInfonItem>
    
                )
                }
        }
      
        if(mouseIn||focused){
            return (
                <SearchInfo 
                onMouseEnter = {handelMouseenter}
                onMouseLeave = {handelMouseleave}
                >
                <SearchInfotitle>
                    热门搜索
                    <SearchInfoswitch onClick = {()=> handlePagechange(page,totalPage,this.spinIcon)} >
                        <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </SearchInfoswitch>
                </SearchInfotitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
    
        }
        else{
            return null;
        }

    }
    render(){
        const {handleInputBlur,handleInputFocus,focused,login} = this.props;
        return (
            <HeaderWrapper>
                <Link to = '/'><Logo></Logo></Link>
            
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ? <NavItem onClick = {this.props.logout} className='right'>退出</NavItem> : <Link to = '/login'><NavItem className='right'>登陆</NavItem></Link>
                }
                <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in = {focused}
                        timeout = {200}
                        classNames = "slide"
                    >
                        <NavSearch 
                        className = {focused? 'focused' : ''}
                        onFocus = {handleInputFocus}
                        onBlur = {handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                        <i className = {focused? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe63d;</i>
                    {this.getListArea()}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Link to = '/write'>
                <Button className = 'write'>
                    <i className="iconfont">&#xe6a4;</i>
                    写文章
                </Button>
                </Link>
                
                <Button className = 'reg'>登陆</Button>  
            </Addition>
        </HeaderWrapper>
        );

    }
}
const mapStateToProps = (state)=>{
    return {
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page : state.getIn(['header','page']),
        totalPage : state.getIn(['header','totalPage']),
        mouseIn :state.getIn(['header','mouseIn']),
        login : state.getIn(['login','login'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actioncreater.getList());
            dispatch(actioncreater.searchFocus());
        },
        handleInputBlur(){
            dispatch(actioncreater.searchBlur());
        },
        handelMouseenter(){
            dispatch(actioncreater.changemouseenter());

        },
        handelMouseleave(){
            dispatch(actioncreater.changemouseleave());

        },
        logout(){
            dispatch(loginActioncreators.logout());
        },
        handlePagechange(page,totalPage,spin){
            spin.style.transform = 'rotate(360deg)';
            if(page<totalPage){
                dispatch(actioncreater.changepage(page+1));
            }
            else{
                dispatch(actioncreater.changepage(1));
            }
            

        }

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header);