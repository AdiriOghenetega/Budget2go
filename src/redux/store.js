import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import earningsSliceReducer from "./earningsSlice";
import expenseSliceReducer from "./expenseSlice"
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user : userSliceReducer,
  earnings :  earningsSliceReducer,
  expense : expenseSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig,rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);