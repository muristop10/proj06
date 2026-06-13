import React from "react";
import { useState, useEffect } from "react";
import Navegacao from "../components/Navegacao.jsx";
import Exibidor from "../components/Exibidor.jsx";
import Janela from "../components/Janela.jsx";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [preco, setPreco] = useState(0);

  useEffect(() => {
    
  }, []);



  return (
    <>
      <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Janela>
        <h1>Total R$ 0,00</h1>
        <table>
          <tbody>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </Janela>
    </>
  );
}
