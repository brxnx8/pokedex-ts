import { useContext } from "react";
import { PokemonsCapturedContext } from "../../contexts/pokemonsCapturedContext";
import { Stats } from "../../assets/usual/components/stats";
import { DivColored } from "../../assets/usual/components/divColors/div.styles";
import del from "../../assets/images/delete.svg";
import { Pokemon } from "../home";
import { PokesGameContext } from "../../contexts/pokemonsGameContext";
import { ContainerCaptured } from "./style";

export function Captured() {
    const { pokeCaptured, setPokeCaptured } = useContext(
        PokemonsCapturedContext
    );

    const { pokesGame, setPokesGame } = useContext(PokesGameContext);

    function RemovePokemons(pokemon: Pokemon) {
        setPokeCaptured((state) =>
            state.filter((poke, index) => {
                if (poke.name != pokemon.name) {
                    return true;
                } else {
                    pokesGame.splice(index, 1);
                    return false;
                }
            })
        );
    }

    return (
        <ContainerCaptured>
            {pokeCaptured.length > 0 ? (
                pokeCaptured.map((pokemon) => {
                    return (
                        <DivColored
                            color={pokemon.types![0]["type"]["name"]}
                            className={"pokeCard"}
                            key={pokemon.id}
                        >
                            <img
                                src={del}
                                className={"close"}
                                onClick={() => RemovePokemons(pokemon)}
                            />
                            <img
                                src={pokemon.imageCard}
                                alt=""
                                className={"pokeImage"}
                            />
                            <h1>{pokemon.name}</h1>
                            <Stats pokemon={pokemon} />
                        </DivColored>
                    );
                })
            ) : (
                <h1 className={"emptyTitle"}>Sem pokemons capturados</h1>
            )}
        </ContainerCaptured>
    );
}
