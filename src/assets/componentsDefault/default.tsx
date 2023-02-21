import { Outlet } from "react-router-dom";
import { Header } from "./hearder";

export function Default() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
