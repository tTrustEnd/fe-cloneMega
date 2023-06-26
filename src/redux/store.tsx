import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
export type IRootState = ReturnType<typeof userReducer>
import filmReducer from './buy/buySlice'
// import chairReducer from './chair/chairSlice'
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
const filmPersisReducer = persistReducer(persistConfig, filmReducer)

export const store = configureStore({
  reducer: {
    user:userReducer,
    auth:persistedReducer,
    film:filmReducer,
    saveFilm:filmPersisReducer,
    // chair:chairReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
const persistor = persistStore(store)
export {persistor}