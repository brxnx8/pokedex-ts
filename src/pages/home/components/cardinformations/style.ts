import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 90%;
    height: 80%;
    margin: auto auto;

    display: flex;
    align-items: stretch;
    justify-content: center;

    .divColorCard {
        position: relative;

        border-radius: 10px 15px 15px 10px;
        border: 0.6px solid rgb(194, 194, 194);
        box-shadow: -0.6px -0.6px rgb(194, 194, 194);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 0.3;

        margin-right: -25px;
        margin-bottom: 20px;
        z-index: 3;
    }
    .pokeball{
        position: absolute;
        top: 0;
        right: 0;

        cursor: pointer;
    }
    .pokeImage {
        height: 25vw;
    }
    .pokemonInfo {
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(21, 19, 19));
        box-shadow: inset -0.6px 0.6px rgb(194, 194, 194);

        color: white;
        text-shadow: 4px 2px 1px rgb(42, 42, 42);

        flex-grow: 0.7;

        border-radius: 10px;

        padding: 10px 15px 10px 40px;
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .pokemonInfo > h1 {
        text-transform: capitalize;

        font-size: 60px;
        width: 100%;
    }
    .pokemonMeasure,
    .pokemonType {
        font-size: 40px;
        width: 100%;

        display: flex;
        justify-content: space-around;

        text-transform: capitalize;
    }
    .type {
        padding: 0 12px 5px 10px;

        border-radius: 20px;
    }

    @media (max-width: 749px) {
        && {
            flex-direction: column;

            height: 90%;
            width: 80%;
        }
        .divColorCard {
            margin: 0 0 -15px 0;

            border-radius: 10px 10px 15px 15px;
            box-shadow: 0.6px -0.8px rgb(194, 194, 194);
        }
        .pokemonInfo {
            border-radius: 0 0 10px 10px;

            padding: 10px 0 10px 0;
            margin: 0;
        }
        .pokemonInfo > h1 {
            font-size: clamp(30px, 10vw, 40px);
        }
        .pokemonMeasure,
        .pokemonType {
            font-size: clamp(20px, 5vw, 30px);
        }
        .pokeImage {
            height: 25vh;
        }
    }


`


   