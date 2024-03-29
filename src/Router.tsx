import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Captured } from "./pages/captured";
import { Default } from "./assets/usual/components/default";
import { Game } from "./pages/game";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/pokedex-ts" element={<Home />} />
                <Route path="captured" element={<Captured />} />
                <Route path="game" element={<Game />} />
            </Route>
        </Routes>
    );
}
