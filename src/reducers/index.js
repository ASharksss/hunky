import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./authReducer";
import userReducer from "./userReducer";
import otherReducer from "./otherReducer";
import stockReducer from './stockReducer';
import adminReducer from './adminReducer';


const rootReducers = combineReducers({
	auth: authReducer,
	user: userReducer,
	other: otherReducer,
	stock: stockReducer,
	admin: adminReducer
})

const persistConfig = {
	key: 'root',
	storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for Redux DevTools

const persistedReducer = persistReducer(persistConfig, rootReducers)

export default () => {
	let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
	let persistor = persistStore(store)
	return { store, persistor }
}