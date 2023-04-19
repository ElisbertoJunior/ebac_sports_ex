import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  products: Produto[]
}

const initialState: CartState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      if (state.products.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.products.push(item)
      }
    }
  }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
