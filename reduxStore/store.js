
import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
  PayloadAction
} from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { devToolsEnhancer } from "redux-devtools-extension";
import productSlice from './productReduc';
import detailSlice from './detailsStore';
import searchReducer from './searchBasket';
import categoriSlice from "./categoriesRedux";


const reducers = combineReducers({
  product:productSlice,
  detail:detailSlice,
  search:searchReducer,
  categori:categoriSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product','detail','search'],
}

const persistedReducer = persistReducer(persistConfig,reducers)


const store = configureStore(
 
  {
    
    reducer:persistedReducer,
  }
   
);


export default store; 