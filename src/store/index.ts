import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import favoritesReducer from './reducers/favorites'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
