import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
export type IRootState = ReturnType<typeof userReducer>

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // blacklist:['account/user']
}
const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user:userReducer,
    auth:persistedReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
const persistor = persistStore(store)
export {persistor}