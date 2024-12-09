import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import  shopReducer  from './shopSlice'

const persistConfig = {
      key: 'root',
      storage,
}

const persistedReducer = persistReducer(persistConfig, shopReducer)

export const store = configureStore({
      reducer: {
            shop: persistedReducer
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: false
            }),
})

export const persistor = persistStore(store)


