import { useContext } from "react";
import { CapturedContext } from "../../contexts/capturedContext";
import { Stats } from "../../assets/componentsDefault/stats";
import { DivColored } from "../../assets/componentsDefault/divColors/div.styles";
import style from "./styles.module.css";
import close from "../../assets/images/close.svg";
import { Pokemon } from "../home";
import { PokeGameContext } from "../../contexts/pokeGameContext";

export function Captured() {
    const { pokeCaptured, setPokeCaptured } = useContext(CapturedContext);

    const {pokeGame, setPokeGame} = useContext(PokeGameContext);

    function RemovePokemon(pokemon: Pokemon) {
        setPokeCaptured((state) =>
            state.filter((poke, index) => {
                if(poke.name != pokemon.name){
                    return true;
                }else{
                    pokeGame.splice(index, 1);
                    return false;
                }
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
