import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1543979787331'); /* IE9*/
  src: url('./iconfont.eot?t=1543979787331#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1543979787331') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1543979787331#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export default GlobalStyle;


