import { MouseEvent, useContext, useEffect, useState } from "react";
import { Pokemon } from "../../index";
import {
    DivColored,
    Types,
} from "../../../../assets/componentsDefault/divColors/div.styles";
import { Stats } from "../../../../assets/componentsDefault/stats";

import PokeballStopped from "../../../../assets/images/pokeballStopped.gif";
import PokeballRotated from "../../../../assets/images/pokeballRotated.gif";
import PokeballStars from "../../../../assets/images/pokeballStars.png";

import style from "./cardinformations.module.css";
import { CapturedContext } from "../../../../contexts/capturedContext";
import { PokeGameContext } from "../../../../contexts/pokeGameContext";
import { LoadPokemon } from "../../../game/loadPokesMachine";

interface PropsCardInfo {
    pokemon: Pokemon;
    classCard: string;
    ToggleClassCard: (event: MouseEvent<HTMLElement>) => void;
    addPokeCaptured: (pokemon: Pokemon) => void;
}

export function CardInfo({
    pokemon,
    classCard,
    ToggleClassCard,
    addPokeCaptured,
}: PropsCardInfo) {
    const [Pokeball, setPokeball] = useState(PokeballStopped);
    const { pokeCaptured } = useContext(CapturedContext);
    const { pokeGame, setPokeGame } = useContext(
        PokeGameContext
    );

    useEffect(() => {
        let image = PokeballStopped;
        pokeCaptured.forEach((poke) => {
            if (poke.name === pokemon.name) {
                image = PokeballStars;
            }
        });
        setPokeball(image);
    }, [pokemon]);

    let types = new Array();

    for (let obj in pokemon.types) {
        types.push(pokemon.types[parseInt(obj)].type.name);
    }

    async function TogglePokeball() {
        if (Pokeball === PokeballStopped) {
            if (pokeCaptured.length < 5) {
                addPokeCaptured(pokemon);
                setPokeball(PokeballRotated);
                setTimeout(() => setPokeball(PokeballStars), 1200);
                const pokemonGame = await LoadPokemon(
                    Math.floor(Math.random() * (150 - 1 + 1)) + 1
                );
                setPokeGame([...pokeGame, pokemonGame]);
            } else {
                window.alert("já foram capturados os 5 pokemons possiveis.");
            }
        }
    }

    return (
        <section className={classCard} onClick={ToggleClassCard}>
            <div className={style.card}>
                <DivColored color={types[0]} className={style.divColorCard}>
                    <img
                        src={Pokeball}
                        alt=""
                        width={"40px"}
                        height={"40px"}
                        onClick={TogglePokeball}
                        className={style.pokeball}
                    />
                    <img
                        src={pokemon.imageCard}
                        alt=""
                        className={style.pokeImage}
                    />
                </DivColored>
                <div className={style.pokemonInfo}>
                    <h1>{pokemon.name}</h1>
                    <section className={style.pokemonType}>
                        {types.map((type) => (
                            <DivColored
                                key={type}
                                className={style.type}
                                color={type}
                            >
                                {type}
                            </DivColored>
                        ))}
                    </section>
                    <section className={style.pokemonMeasure}>
                        <div>{`${pokemon.weight! / 10}kg`}</div>
                        <div>{`${pokemon.height! / 10}m`}</div>
                    </section>
                    <Stats pokemon={pokemon} />
                </div>
            </div>
        </section>
    );
}
