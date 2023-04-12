import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Pokemon } from "../pages/home";

interface PropsPokeGameContext {
    pokesGame: Pokemon[];
    setPokesGame: Dispatch<SetStateAction<Pokemon[]>>;
}
interface PropsPokeGameProvider {
    children: ReactNode;
}

export const PokesGameContext = createContext({} as PropsPokeGameContext);

export function PokesGameProvider({ children }: PropsPokeGameProvider) {
    const [pokesGame, setPokesGame] = useState<Pokemon[]>([]);

    return (
        <PokesGameContext.Provider
            value={{
                pokesGame,
                setPokesGame,
            }}
        >
            {children}
        </PokesGameContext.Provider>
    );
}
