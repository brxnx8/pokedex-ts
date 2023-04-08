import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PokemonsCapturedContextProvider } from "./contexts/pokemonsCapturedContext";
import { PokeGameProvider } from "./contexts/pokemonsGameContext";

export function App() {
    return (
        <BrowserRouter>
            <PokemonsCapturedContextProvider>
                <PokeGameProvider>
                    <Router />
                </PokeGameProvider>
            </PokemonsCapturedContextProvider>
        </BrowserRouter>
    );
}
