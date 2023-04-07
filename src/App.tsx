import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CapturedContextProvider } from "./contexts/capturedContext";
import { PokeGameProvider } from "./contexts/pokeGameContext";

export function App() {
    return (
        <BrowserRouter>
            <CapturedContextProvider>
                <PokeGameProvider>
                    <Router />
                </PokeGameProvider>
            </CapturedContextProvider>
        </BrowserRouter>
    );
}
