import React, { useState } from "react";
import {
  Botoes,
  DivFundo,
  Entrada,
  FundoBotoes,
  FundoCalculadora,
} from "./style";

function Principal() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <DivFundo altura={window.innerHeight} largura={window.innerWidth}>
        <FundoCalculadora>
          <Entrada>{valor}</Entrada>
          <FundoBotoes>
            <Botoes onClick={() => setValor(valor + "%")}>%</Botoes>
            <Botoes onClick={() => setValor(0)}>CE</Botoes>
            <Botoes onClick={() => setValor(0)}>C</Botoes>
            <Botoes>:</Botoes>
            <Botoes onClick={() => setValor(valor + "9")}>9</Botoes>
            <Botoes onClick={() => setValor(valor + "8")}>8</Botoes>
            <Botoes onClick={() => setValor(valor + "7")}>7</Botoes>
            <Botoes onClick={() => setValor(valor + "*")}>x</Botoes>
            <Botoes onClick={() => setValor(valor + "6")}>6</Botoes>
            <Botoes onClick={() => setValor(valor + "5")}>5</Botoes>
            <Botoes onClick={() => setValor(valor + "4")}>4</Botoes>
            <Botoes onClick={() => setValor(valor + "-")}>-</Botoes>
            <Botoes onClick={() => setValor(valor + "1")}>1</Botoes>
            <Botoes onClick={() => setValor(valor + "2")}>2</Botoes>
            <Botoes onClick={() => setValor(valor + "3")}>3</Botoes>
            <Botoes onClick={() => setValor(valor + "+")}>+</Botoes>
            <Botoes onClick={() => setValor(valor + "-")}>+/-</Botoes>
            <Botoes onClick={() => setValor(valor + "0")}>0</Botoes>
            <Botoes onClick={() => setValor(valor + ",")}>,</Botoes>
            <Botoes onClick={() => setValor(valor + "=")}>=</Botoes>
          </FundoBotoes>
        </FundoCalculadora>
      </DivFundo>
    </div>
  );
}

export default Principal;
