import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaperGame.png";

export const ContainerGame = styled.main`
    background-image: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;

    padding: 20px 15px;

    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: start;

    .pokeCard {
        position: relative;

        width: 420px;
        height: 490px;
        padding: 5px;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 2px;
        border: 5px solid rgba(50, 50, 50, 0.831);
    }
    .containerPokesUser,
    .containerPokeGame {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }

    .pokesUser {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .buttonsCarroussel {
        display: flex;
        justify-content: center;
        width: 420px;
    }

    .pokeGame {
        display: flex;
        justify-content: flex-end;
    }

    .titlePokeUser {
        color: white;
    }
    .pokeCard > .pokeImage {
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

    && Button {
        width: 180px;
        margin-left: 10px;
        height: 50px;
        padding: 0;
    }
`;
