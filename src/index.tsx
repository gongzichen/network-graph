import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from  './store';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './assets/css/common.less';
import Home from './routes/Home';
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'
import 'lib-flexible'
ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zh_CN}>
        <main className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);