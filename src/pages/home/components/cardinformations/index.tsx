import { MouseEvent, useContext, useEffect, useState } from "react";
import { Pokemon } from "../../index";
import { DivColored } from "../../../../assets/usual/components/divColors/div.styles";
import { Stats } from "../../../../assets/usual/components/stats";
import PokeballStopped from "../../../../assets/images/pokeballStopped.gif";
import PokeballRotated from "../../../../assets/images/pokeballRotated.gif";
import PokeballStars from "../../../../assets/images/pokeballStars.png";
import { PokemonsCapturedContext } from "../../../../contexts/pokemonsCapturedContext";
import { PokeGameContext } from "../../../../contexts/pokemonsGameContext";
import { LoadPokemon } from "../../../../assets/usual/functions/loadPokemon";
import { ContainerCard } from "./style";

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
    const { pokeCaptured } = useContext(PokemonsCapturedContext);
    const { pokeGame, setPokeGame } = useContext(PokeGameContext);
    let types = new Array();

    for (let obj in pokemon.types) {
        types.push(pokemon.types[parseInt(obj)].type.name);
    }

    useEffect(() => {

        let image = PokeballStopped;
        pokeCaptured.forEach((poke) => {
            if (poke.name === pokemon.name) {
                image = PokeballStars;
            }
        });
        setPokeball(image);
        
    }, [pokemon]);


    async function TogglePokeballAndADDPokemons() {
        
        if (Pokeball === PokeballStopped) {
            if (pokeCaptured.length < 5) {
                addPokeCaptured(pokemon);
                setPokeball(PokeballRotated);
                setTimeout(() => setPokeball(PokeballStars), 1200);
                if (pokeGame.length < 5) {
                    const pokemonGame = await LoadPokemon(
                        Math.floor(Math.random() * (150 - 1 + 1)) + 1
                    );
                    setPokeGame([...pokeGame, pokemonGame]);
                }
            } else {
                window.alert("já foram capturados os 5 pokemons possiveis.");
            }
        }

    }

    return (
        <section className={classCard} onClick={ToggleClassCard}>
            <ContainerCard>
                <DivColored color={types[0]} className={"divColorCard"}>
                    <img
                        src={Pokeball}
                        alt=""
                        width={"40px"}
                        height={"40px"}
                        onClick={TogglePokeballAndADDPokemons}
                        className={"pokeball"}
                    />
                    <img
                        src={pokemon.imageCard}
                        alt=""
                        className={"pokeImage"}
                    />
                </DivColored>
                <div className={"pokemonInfo"}>
                    <h1>{pokemon.name}</h1>
                    <section className={"pokemonType"}>
                        {types.map((type) => (
                            <DivColored
                                key={type}
                                className={"type"}
                                color={type}
                            >
                                {type}
                            </DivColored>
                        ))}
                    </section>
                    <section className={"pokemonMeasure"}>
                        <div>{`${pokemon.weight! / 10}kg`}</div>
                        <div>{`${pokemon.height! / 10}m`}</div>
                    </section>
                    <Stats pokemon={pokemon} />
                </div>
            </ContainerCard>
        </section>
    );

}
