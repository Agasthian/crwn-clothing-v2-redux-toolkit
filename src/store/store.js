// import { compose, createStore, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );
export const store = configureStore({
  reducer : rootReducer,
  //middleware : middleWares // redux toolkit by default have redux thunk middleware, but we are using custom middleware in config so default gets disabled
  middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck:false
    }).concat(middleWares)
});

// export const persistor = persistStore(store);
