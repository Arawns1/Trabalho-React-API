/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { ItemCarrinhoContainer,
  InfoProduto,
  ImageContainer,
  NomeWrapper,
  PrecoWrapper,
  NomeProduto,
  PrecoProduto,
  QuantidadeProduto,
  FormatButtons,
  BtnQuantidade } from './style';

export function ItemCarrinho(props) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(0.00);
  
  const preco = props.valor; // Preço do produto

  useEffect(() => {
    const novoPrecoTotal = (quantidade * preco).toFixed(2);
    setPrecoTotal(novoPrecoTotal);
  }, [quantidade])

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
    props.updateFinalPrice(preco)
    props.updateQuantidade(props.nome, quantidade + 1);
  };

  const handleRemove = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
      props.updateFinalPrice(-preco)
      props.updateQuantidade(props.nome, quantidade - 1);
    }
  };

  return (
  <ItemCarrinhoContainer>
    <InfoProduto>
      <ImageContainer>
        <img src={props.imagem} alt="Imagem do produto" />
      </ImageContainer>
      <NomeWrapper>
        <NomeProduto>{props.nome}</NomeProduto>
      </NomeWrapper>
      <hr/>
      <FormatButtons>
        <BtnQuantidade onClick={handleRemove}>-</BtnQuantidade>
        <QuantidadeProduto>{quantidade}</QuantidadeProduto>
        <BtnQuantidade onClick={handleAdd}>+</BtnQuantidade>
      </FormatButtons>
      <hr/>
      <PrecoWrapper>
        <PrecoProduto> R$ {precoTotal}</PrecoProduto>
      </PrecoWrapper>
    </InfoProduto>
  </ItemCarrinhoContainer>
  );
}
