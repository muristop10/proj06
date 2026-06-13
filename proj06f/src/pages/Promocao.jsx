import React from "react";
import Navegacao from "../components/Navegacao.jsx";
import Exibidor from "../components/Exibidor.jsx";

export default function Promocao() {
  return (
    <>
      <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      {produtosExemplo.map((produto, indice) => {
        produto.promocao ? <Exibidor key={indice} produto={produto} /> : "";
      })}
    </>
  );
}
