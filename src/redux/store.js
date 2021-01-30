// Necessities and accessories for constructing our Redux store;
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}
// Construct our Redux store;
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Export our store by default, which will be provided to and injected within our entire application;

let store = createStore(persistedReducer, middleware)
let persistor = persistStore(store)
export { store, persistor }
