import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxPromise),
    // other store enhancers if any
  ));

// const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

export default store
