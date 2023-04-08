import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import { ConteinerHeader } from "./style";

export function Header() {
    return (
        <ConteinerHeader>
            <h1>Pokedex</h1>
            <nav>
                <NavLink to="/">Pokemons</NavLink>
                <NavLink to="/captured">Captured</NavLink>
                <NavLink to="/game">Game</NavLink>
            </nav>
        </ConteinerHeader>
    );
}
