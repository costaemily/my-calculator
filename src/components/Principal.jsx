import React from "react";
import { Botoes, DivFundo, Entrada, FundoBotoes, FundoCalculadora } from "./style";

function Principal() {

  
  return (
    <div>
      <DivFundo altura={window.innerHeight} largura={window.innerWidth}>
          <FundoCalculadora>
            <Entrada>

            </Entrada>
            <FundoBotoes>
                <Botoes>%</Botoes>
                <Botoes>CE</Botoes>
                <Botoes>C</Botoes>
                <Botoes>:</Botoes>
                <Botoes>9</Botoes>
                <Botoes>8</Botoes>
                <Botoes>7</Botoes>
                <Botoes>x</Botoes>
                <Botoes>6</Botoes>
                <Botoes>5</Botoes>
                <Botoes>4</Botoes>
                <Botoes>-</Botoes>
                <Botoes>1</Botoes>
                <Botoes>2</Botoes>
                <Botoes>3</Botoes>
                <Botoes>+</Botoes>
                <Botoes>+/-</Botoes>
                <Botoes>0</Botoes>
                <Botoes>,</Botoes>
                <Botoes>=</Botoes>
            </FundoBotoes>
          </FundoCalculadora>
      </DivFundo>
      
    </div>
  );
}

export default Principal;