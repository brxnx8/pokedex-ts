import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PokemonsCapturedContextProvider } from "./contexts/pokemonsCapturedContext";
import { PokesGameProvider } from "./contexts/pokemonsGameContext";

export function App() {
    return (
        <BrowserRouter>
            <PokemonsCapturedContextProvider>
                <PokesGameProvider>
                    <Router />
                </PokesGameProvider>
            </PokemonsCapturedContextProvider>
        </BrowserRouter>
    );
}
