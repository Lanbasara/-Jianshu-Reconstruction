import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-index : 1;
    position : relative;
    height : 58px;
    border-bottom : 1px solid #f0f0f0;
    background : #fff;
`;


export const Logo = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    display : block;
    width : 100px;
    height : 56px;
    background : url(${logoPic});
    background-size : contain;
`;

export const Nav = styled.div`
    width : 945px;
    margin 0 auto;
    height : 58px;
    box-sizing : border-box;
    padding-right : 70px;

`;

export const NavItem = styled.div`
    line-height :56px;
    padding : 0 15px;
    front-size : 17 px;
    color : #333;
    &.left{
        float : left;
    }

    &.right{
        float : right;
        color : #969696;
        cursor:hand;
    }
    &.active{
        color : #ea6f5a;
    }

`;

export const NavSearch = styled.input.attrs({
    placeholder : '搜索'
})`
    width : 160px;
    border : none;
    outline : none;
    height : 38px;
    border-radius : 19px;
    margin-top : 9px;
    padding : 0 30px 0 20px;
    box-sizing : border-box;
    background : #eee;
    font-size : 14px;
    margin-left : 20px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 260px;
    }
    &.slide-enter{
        transition : all 0.2s ease-out;
        width :160px;

    }
    &.slide-enter-active{
        width : 240px;

    }
    &.slide-exit{
        transition : all 0.2s ease-out;

    }
    &.slide-exit-active{
        width : 160px;
        
    }
`;

export const SearchWrapper = styled.div`
    position : relative;
    float : left ;
    .zoom{
        position : absolute;
        bottom : 5px;
        right : 5px;
        line-height : 30px;
        width : 30px;
        border-radius : 15px;
        text-align : center;
        &.focused{
            background : #777;
            color : #fff;
        }
    }

`;

export const Addition = styled.div`
    position : absolute;
    right : 0;
    top : 0;
    height : 56px;
`;


export const Button = styled.div`
    float: right;
    line-height : 38px;
    border-radius : 19px;
    margin-top : 0px;
    border : 1px solid #ec6149;
    margin-right : 20px;
    padding : 0 20px;
    font-size : 14px;
    &.reg{
        color : #ec6149;
    }
    &.write{
        color : #fff;
        background : #ec6149;
    }

`;


export const SearchInfo = styled.div`
    position : absolute;
    left : 0;
    top : 56px;
    width : 260px;
    padding 0 ,20px;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    background : #fff;

`;

export const SearchInfotitle = styled.div`
    margin-top : 20px;
    margin-bottom : 15px;
    line-height: 20px;
    font-size : 14px;
    color:#969696;

`;

export const SearchInfoswitch = styled.span`
    .spin{
        display : block;
        font-size : 12px;
        margin-left : 2px;
        transition : all .2 ease-in;
        transform_orginin : center center;

    }

`;

export const SearchInfonItem = styled.a`
    display : block;
    float : left;
    line-height : 20px;
    padding : 0 5px;
    font-size : 12px;
    border : 1px solid #ddd;
    border-radius : 3px;
    color : #787878;
    margin-left : 10px;
    margin-bottom : 10px;
`;


export const SearchInfoList = styled.div`
    overflow : hidden:
`;
