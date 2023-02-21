import { NavLink } from "react-router-dom";
import style from "./header.module.css";

export function Header() {
    return (
        <header className={style.header}>
            <h1>Pokedex</h1>
            <nav>
                <NavLink to="/">Pokemons</NavLink>
                <NavLink to="/captured">Captured</NavLink>
            </nav>
        </header>
    );
}
