import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaperGame.png"

export const ContainerGame = styled.main `
    background-image: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;


    padding: 20px 15px;

    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;

    .pokeCard {
        position: relative;

        width: 425px;
        height: 540px;
        padding: 5px;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 2px;
        border: 5px solid rgba(50, 50, 50, 0.831);
    }
    .containerPokesUser{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
    .titlePokeUser{
        color: white;
    }
    .pokeCard >
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
`
   


