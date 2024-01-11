import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducar from './reducers';

const middleware = [thunk];
const initialState = {};
const store = createStore(rootReducar, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;