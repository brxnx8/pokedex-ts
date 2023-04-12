import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import { ConteinerHeader } from "./style";

export function Header() {
    return (
        <ConteinerHeader>
            <h1>Pokedex</h1>
            <nav>
                <NavLink to="/pokedex-ts">Pokemons</NavLink>
                <NavLink to="/captured">Capturados</NavLink>
                <NavLink to="/game">Jogue</NavLink>
            </nav>
        </ConteinerHeader>
    );
}
