import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import Product from './components/Product'
import Service from './components/Service'
import Faq from './components/Faq'
import HomeContainer from './containers/HomeContainer'
import ReviewsContainer from './containers/ReviewsContainer'
import reducer from './reducers'

let store = createStore(reducer);

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
        <Route path="service" component={Service}/>
        <Route path="faq" component={Faq}/>
      </Route>
        {/*}<Route path="rent" component={Rent}/>
          <Route path="/reviews/:review" component={Review}/>
        </Route>
        <Route path="*" component={NoMatch}/>*/}
    </Router>
  </Provider>
), document.getElementById('root'))
