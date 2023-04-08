import styled from "styled-components";

export  const ContainerCaptured = styled.main`
    padding: 20px 10px;
    height: 100%;

    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .pokeCard {
        position: relative;

        width: 425px;
        height: 540px;
        padding: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 2px;
        border: 5px solid rgba(50, 50, 50, 0.831);
    }
    .close {
        width: 30px;
        position: absolute;
        top: -15px;
        right: -15px;
        cursor: pointer;
    }
    .pokeImage {
        height: 30%;
    }
    .pokeCard > h1 {
        text-transform: capitalize;

        border-top: 3px solid rgba(61, 60, 60, 0.834);

        width: 100%;

        font-size: 60px;
    }
    .Stats {
        width: 100%;
        padding: 0;
    }
    .emptyTitle{
        color: white;
        font-size: 4rem;
    }
`
   
