import { Produto } from '../../App'
import { useDispatch, useSelector } from 'react-redux'

import { addCart } from '../../store/reducers/cart'
import { addFavorites, removeItem } from '../../store/reducers/favorites'
import { RootReducer } from '../../store'

import * as S from './styles'

type Props = {
  produto: Produto
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootReducer) => state.favorites.itens)

  function favoritar(produto: Produto) {
    if (favorites.find((p) => p.id === produto.id)) {
      dispatch(removeItem(produto))
    } else {
      dispatch(addFavorites(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addCart(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
