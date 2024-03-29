import styled from "styled-components";


export const ContainerHome = styled.main`
    display: inline-block;
    padding: 10px;

    position: relative;

    .pokedex {
        width: 100%;
        height: 95vh;
        max-width: 425px;
    }

    .poke-image {
        position: absolute;
        z-index: 2;

        bottom: 55%;
        left: 50%;
        transform: translate(-63%, 20%);

        height: 18%;

        cursor: pointer;
    }
    .poke-image:hover {
        height: 21%;
    }
        .poke-name {
        position: absolute;
        z-index: 2;

        top: 55%;
        right: 25%;

        font-weight: 600;

        color: #3a444d;

        text-transform: capitalize;

        font-size: clamp(8px, 7.5vw, 26px);

        cursor: pointer;
    }
    .poke-name:hover {
        font-size: clamp(9px, 8vw, 27px);
    }
    .poke-name > span {
        color: #aaa;
    }
    .searchPokemon {
        position: absolute;
        top: 65%;
        right: 38%;
        width: 50%;
        padding: 1%;

        outline: none;
        border: 2px solid #333;
        border-radius: 5px;

        font-weight: 600;
        color: #3a444d;
        font-size: clamp(8px, 5vw, 1rem);

        box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
    }
    .ButtonSearchPokemon {
        position: absolute;
        top: 65.5%;
        right: 25%;
        padding: 1%;

        outline: none;
        border: 2px solid #333;
        border-radius: 5px;

        font-weight: 600;
        color: #3a444d;
        font-size: clamp(6px, 3vw, 0.8rem);

        box-shadow: -2px 3px 0 #888, -3px 5px 0 #333;

        cursor: pointer;
    }
    .ButtonSearchPokemon:hover {
        background-color: #d2d2d2;
    }
    .ButtonSearchPokemon:active {
        box-shadow: inset -1px 1px 0 #333;

        font-size: 0.75rem;

        top: 66%;
    }
    .buttons {
        display: flex;
        gap: 15px;

        width: 65%;
        position: absolute;

        bottom: 10%;
        left: 15%;
    }

    .backgroundNone {
        background-color: rgba(0, 0, 0, 0.774);

        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 5;

        display: none;
    }
    .backgroundBlock {
        background-color: rgba(0, 0, 0, 0.774);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`



