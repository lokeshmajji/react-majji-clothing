import {compose, createStore, applyMiddleware } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import logger from 'redux-logger';

// import { thunk} from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import { rootSaga } from './root.saga';

// root reducer
import {rootReducer} from './root.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleWare()

const middleWares = [ process.env.NODE_ENV !== 'production' && logger, sagaMiddleWare].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);
