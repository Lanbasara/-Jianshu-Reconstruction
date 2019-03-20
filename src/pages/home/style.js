import styled from 'styled-components';
import Logopic1 from '../../statics/7.png';
import Logopic2 from '../../statics/30.png';
import Logopic3 from '../../statics/3.png';
import Logopic4 from '../../statics/4.png';
import Logopic5 from '../../statics/5.png';


export const HomeWrapper = styled.div`
    overflow : hidden;
    width : 960px;
    margin : 0 auto;
`;

export const Homeleft = styled.div`
    float:left;
    margin-left: 15px;
    padding-top : 30px;
    width : 625px;
    .banner-img{
      width : 625px;
      height : 270px;
    }
   
`;

export const Homeright = styled.div`
    width : 280px;
    float : right;
`;

export const TopicWrapper = styled.div`
    overflow : hidden;
    padding : 20px 0 10px 0;
    margin-left : -18px;
    border-bottom : 1px solid #dcdcdc;
   
`;

export const TopicItem = styled.div`
    float : left;
    height : 32px;
    line-height : 32px;
    margin-left :18px;
    margin-bottom : 18px;
    padding-right : 10px;
    background : #f7f7f7;
    font-size : 14px;
    color : #000;
    border : 1px solid #dcdcdc;
    .tpoicpic{
        display : block;
        float : left;
        width : 32px;
        height : 32px;
        margin-right : 10px;
        
    }

`;

export const More = styled.a.attrs({
    href : '/'
})`
    float : left;
    height : 32px;
    line-height : 32px;
    margin-left :18px;
    margin-bottom : 18px;
    padding-right : 10px;
    font-size : 14px;
   
   
`;

export const ListItem = styled.div`
    overflow : hidden;
    padding : 20px 0;
    border-bottom : 1px solid #dcdcdc;
    .pic{
        width : 125px;
        height : 100px;
        float : right;
        border-radius : 10px;
    }
   
`;


export const ListInfo = styled.div`
    width : 500px;
    float : left;
    .title{
        line-height : 27px;
        font-size : 18px;
        font-weight : bold;
        color : #333;
    }
    .desc{
        line-height : 24px;
        font-size : 10px;
        color : #999;

    }
   
`;




export const RecommendWrapper = styled.div`
    margin : 30px 0;
    width : 280px;
   
`;

export const WriterWrapper = styled.div`
    overflow : hidden;
    width : 278px;
    height : 70px;
    line-height : 300px;
    border : 1px solid #dcdcdc;
    border-radius : 3px;
    text-align : center;
    .pic{
        display : block;
        float : left;
        width : 48px;
        height : 48px;
        border-radius : 50%;
        margin-top : 10px;
        margin-left : 10px;
    }
`;

export const WriterName = styled.div`
    height : 25px;
    line-height : 10px;
    .title{
        margin-left : 0px;
        font-size : 15px; 
    }
    .like{
        font-size : 15px;
    }

`;

export const Recommenditem1 = styled.div`
    width : 280px;
    height : 50px;
    background : url(${Logopic1});
    background-size : contain;
`;


export const Recommenditem2 = styled.div`
    width : 280px;
    height : 50px;
    background : url(${Logopic2});
    background-size : contain;
`;

export const Recommenditem3 = styled.div`
    width : 280px;
    height : 50px;
    background : url(${Logopic3});
    background-size : contain;
`;

export const Recommenditem4 = styled.div`
    width : 280px;
    height : 50px;
    background : url(${Logopic4});
    background-size : contain;
`;
export const Recommenditem5 = styled.div`
    width : 280px;
    height : 50px;
    background : url(${Logopic5});
    background-size : contain;
`;
export const LoadMOre = styled.div`
    width : 100%;
    height : 40px;
    margin : 30px 0;
    line-height : 40px;
    background : #a5a5a5;
    text-align : center;
    border-radius :20px;
    color : #fff;
    cursor : pointer;
`;


export const BackTop = styled.div`
    position : fixed;
    right : 100px;
    bottom : 100px;
    width : 60px;
    height : 60px;
    line-height : 60px;
    text-align : center;
    border : 1px soild #ccc;
    font-size : 14px;
   
`;




