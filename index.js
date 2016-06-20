import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import Product from './components/Product'
import Faq from './components/Faq'
import HomeContainer from './containers/HomeContainer'
import ReviewsContainer from './containers/ReviewsContainer'
import ServiceContainer from './containers/ServiceContainer'
import reducer from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="reviews" component={ReviewsContainer}/>
        <Route path="procuct" component={Product}/>
        <Route path="service" component={ServiceContainer}/>
        <Route path="faq" component={Faq}/>
      </Route>
        {/*}<Route path="rent" component={Rent}/>
          <Route path="/reviews/:review" component={Review}/>
        </Route>
        <Route path="*" component={NoMatch}/>*/}
    </Router>
  </Provider>
), document.getElementById('root'))
