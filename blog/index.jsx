import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import Blog from './components/Blog'
import List from './components/Blog/List'
import Content from './components/Blog/Content'
import RootCss from './components/Root.less'

console.log('[APP] app start ' + process.env.NODE_ENV)
console.time && console.timeEnd('[APP] app load time')
var rootInstance = null

import configureStore from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)
rootInstance = ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Blog}>
        <IndexRoute component={List} />
        <Route path='tag/:name' component={List}/>
        <Route path='article/:name/:id' component={Content}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}

