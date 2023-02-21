import { useContext } from "react";
import { CapturedContext } from "../../contexts/capturedContext";
import { Stats } from "../../assets/componentsDefault/stats";
import { DivColored } from "../../assets/componentsDefault/divColors/div.styles";
import style from "./styles.module.css";
import close from "../../assets/images/close.svg";
import { Pokemon } from "../home";

export function Captured() {
    const { pokeCaptured, setPokeCaptured } = useContext(CapturedContext);

    function RemovePokemon(pokemon: Pokemon) {
        setPokeCaptured((state) =>
            state.filter((poke) => {
                return poke.name != pokemon.name;
            })
        );
    }

    return (
        <main className={style.capturedContent}>
            {pokeCaptured.length > 0 ? (
                pokeCaptured.map((pokemon) => {
                    return (
                        <DivColored
                            color={pokemon.types![0]["type"]["name"]}
                            className={style.pokeCard}
                            key={pokemon.id}
                        >
                            <img
                                src={close}
                                className={style.close}
                                onClick={() => RemovePokemon(pokemon)}
                            />
                            <img
                                src={pokemon.imageCard}
                                alt=""
                                className={style.pokeImage}
                            />
                            <h1>{pokemon.name}</h1>
                            <Stats pokemon={pokemon} />
                        </DivColored>
                    );
                })
            ) : (
                <h1 className={style.emptyTitle}>Sem pokemons capturados</h1>
            )}
        </main>
    );
}
