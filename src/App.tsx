import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProductsQuery } from './services/api'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
