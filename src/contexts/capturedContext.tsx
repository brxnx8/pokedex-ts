import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Pokemon } from "../pages/home";

interface PropsCapturedContext {
    pokeCaptured: Pokemon[];
    setPokeCaptured: Dispatch<SetStateAction<Pokemon[]>>;
}
interface PropsCapturedContexProvider {
    children: ReactNode;
}

export const CapturedContext = createContext({} as PropsCapturedContext);

export function CapturedContextProvider({
    children,
}: PropsCapturedContexProvider) {
    const [pokeCaptured, setPokeCaptured] = useState<Pokemon[]>([]);

    return (
        <CapturedContext.Provider
            value={{
                pokeCaptured,
                setPokeCaptured,
            }}
        >
            {children}
        </CapturedContext.Provider>
    );
}
