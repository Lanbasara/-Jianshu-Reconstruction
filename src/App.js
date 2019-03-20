import React, {Fragment, Component } from 'react';
import Header from './common/header/index.js';
import store from './store/index.js';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import GlobalStyle from './statics/iconfont/iconfont.js';

import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import write from './pages/write';


class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyle/>
        <Provider store = {store}>
          <BrowserRouter>
          <div>
          <Header/>
            <Route path = '/' exact component = {Home}></Route>
            <Route path = '/detail/:id' exact component = {Detail}></Route>
            <Route path = '/login' exact component = {Login}></Route>
            <Route path = '/write' exact component = {write}></Route>
          </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
