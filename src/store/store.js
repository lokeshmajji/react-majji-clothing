import {compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import logger from 'redux-logger';

import { thunk} from 'redux-thunk'
// root reducer
import {rootReducer} from './root.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger, thunk]

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);
