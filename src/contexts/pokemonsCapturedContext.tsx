import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Pokemon } from "../pages/home";

interface PropsPokemonsCapturedContext {
    pokeCaptured: Pokemon[];
    setPokeCaptured: Dispatch<SetStateAction<Pokemon[]>>;
}
interface PropsCapturedContexProvider {
    children: ReactNode;
}

export const PokemonsCapturedContext = createContext({} as PropsPokemonsCapturedContext);

export function PokemonsCapturedContextProvider({
    children,
}: PropsCapturedContexProvider) {
    const [pokeCaptured, setPokeCaptured] = useState<Pokemon[]>([]);

    return (
        <PokemonsCapturedContext.Provider
            value={{
                pokeCaptured,
                setPokeCaptured,
            }}
        >
            {children}
        </PokemonsCapturedContext.Provider>
    );
}
