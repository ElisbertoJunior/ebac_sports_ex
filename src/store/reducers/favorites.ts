import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritesState = {
  itens: Produto[]
}

const initialState: FavoritesState = {
  itens: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      if (!state.itens.find((p) => p.id === item.id)) {
        state.itens.push(item)
      }
    },
    removeItem: (state, action: PayloadAction<Produto>) => {
      const index = state.itens.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.itens.splice(index, 1)
      }
    }
  }
})

export const { addFavorites, removeItem } = favoritesSlice.actions
export default favoritesSlice.reducer
