import styled from "styled-components";

export const DivFundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 569px;
`;
export const FundoCalculadora = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    width: 35%;
    height: 90%;

    background-color: gray;
    box-shadow: rgb(0 0 0 / 25%) 6px 6px 80px 8px;
    border-radius: 7%;
`;
export const Entrada = styled.div`
    width: 80%;
    height: 12%;

    background-color: green;
`;
export const FundoBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 3%;

    width: 80%;
    height: 70%;
`;
export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 4rem;

    border-radius: 10%;

    background-color: #4D4D4D;

    color: white;
    font-weight: 600;
    font-size: 1.5rem;

    &:hover{
        background-color: #696969;
        cursor: pointer;
    }
`;