import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Pokemon } from "../pages/home";

interface PropsPokeGameContext {
    pokeGame: Pokemon[];
    setPokeGame: Dispatch<SetStateAction<Pokemon[]>>;
}
interface PropsPokeGameProvider {
    children: ReactNode;
}

export const PokeGameContext = createContext({} as PropsPokeGameContext);

export function PokeGameProvider({
    children,
}: PropsPokeGameProvider) {
    const [pokeGame, setPokeGame] = useState<Pokemon[]>([]);

    return (
        <PokeGameContext.Provider
            value={{
                pokeGame,
                setPokeGame,
            }}
        >
            {children}
        </PokeGameContext.Provider>
    );
}
