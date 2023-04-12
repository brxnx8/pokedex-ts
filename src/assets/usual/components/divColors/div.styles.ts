import styled from "styled-components";

export type Types =
    | "fire"
    | "water"
    | "grass"
    | "normal"
    | "fighting"
    | "flying"
    | "electric"
    | "poison"
    | "ground"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy"
    | "rock"
    | "bug"
    | "ghost"
    | "steel";

const colors = {
    fire: "#f08030",
    water: "#6890f0",
    grass: "#78c850",
    normal: "#a8a878",
    fighting: "#c03028",
    flying: "#a890f0",
    electric: "#f8d030",
    poison: "#a040a0",
    ground: "#e0c068",
    psychic: "#f85888",
    ice: "#98d8d8",
    dragon: "#7038f8",
    dark: "#705848",
    fairy: "#ee99ac",
    rock: "#b8a038",
    bug: "#a8b820",
    ghost: "#705898",
    steel: "#b8b8d0",
};

interface PropsColor {
    color: Types;
    display?: string;
}

export const DivColored = styled.div<PropsColor>`
    background-color: ${(props) => colors[props.color]};
    display: ${(props) => (props.display === "none" ? props.display : "flex")};
`;
