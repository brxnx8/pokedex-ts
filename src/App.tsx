import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Pokemon } from "./pages/home";
import { CapturedContextProvider } from "./contexts/capturedContext";

export function App() {
    return (
        <BrowserRouter>
            <CapturedContextProvider>
                <Router />
            </CapturedContextProvider>
        </BrowserRouter>
    );
}
