import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const favorites = useSelector((state: RootReducer) => state.favorites.itens)
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favorites.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {products?.map((item) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(item)}
            key={item.id}
            produto={item}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
