import { useContext, useEffect, useState } from "react";
import { CapturedContext } from "../../contexts/capturedContext";
import { Stats } from "../../assets/componentsDefault/stats";
import { DivColored } from "../../assets/componentsDefault/divColors/div.styles";
import style from "./styles.module.css";
import { Pokemon } from "../home";
import { PokeGameContext } from "../../contexts/pokeGameContext";

export function Game() {
    const { pokeCaptured, setPokeCaptured } = useContext(CapturedContext);

    const { pokeGame } = useContext(
        PokeGameContext
    );

    return (
        <main className={style.capturedContent}>
            <div>
                <h1>Escolha seu Pokemon</h1>
                <div>
                    {pokeCaptured.length > 0 ? (
                        pokeCaptured.map((pokemon) => {
                            return (
                                <DivColored
                                    color={pokemon.types![0]["type"]["name"]}
                                    className={style.pokeCard}
                                    key={pokemon.id}
                                    onClick={event => console.log(event)}
                                >
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
                        <h1 className={style.emptyTitle}>
                            Sem pokemons capturados
                        </h1>
                    )}
                </div>
            </div>
            <div>
                <h1>Pokemons da Máquina</h1>
                <div>
                    {pokeGame.length > 0 ? (
                        pokeGame.map((pokemon) => {
                            return (
                                <DivColored
                                    color={pokemon.types![0]["type"]["name"]}
                                    className={style.pokeCard}
                                    key={pokemon.id}
                                >
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
                        <h1 className={style.emptyTitle}>
                            Sem pokemons capturados
                        </h1>
                    )}
                </div>
            </div>
        </main>
    );
}
