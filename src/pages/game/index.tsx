import { MouseEvent, useContext, useState } from "react";
import { PokemonsCapturedContext } from "../../contexts/pokemonsCapturedContext";
import { Stats } from "../../assets/usual/components/stats";
import { DivColored } from "../../assets/usual/components/divColors/div.styles";
import { Pokemon } from "../home";
import { PokeGameContext } from "../../contexts/pokemonsGameContext";
import { ChooseStats } from "./components/chooseStats";
import { ContainerGame } from "./style";

export function Game() {
    const { pokeCaptured, setPokeCaptured } = useContext(
        PokemonsCapturedContext
    );
    const [pokeSelected, setPokeSelected] = useState({} as Pokemon);
    const [pokeGameSelected, setPokeGameSelected] = useState({} as Pokemon);
    const [displayChooseStats, setDisplayChooseStats] = useState(false)
    const { pokeGame, setPokeGame } = useContext(PokeGameContext);

    function createStats(pokemon: Pokemon, event: MouseEvent) {
       
        setPokeSelected(pokemon);

        if(event.currentTarget.nodeName === 'DIV'){
            if (displayChooseStats === false) {
                setDisplayChooseStats(true);
            } else {
                setDisplayChooseStats(false);
            }
        }else{
            if (
            pokemon.imageCard &&
            pokemon.name &&
            event.currentTarget === event.target
            ) {
                if (displayChooseStats === false) {
                    setDisplayChooseStats(true);
                } else {
                    setDisplayChooseStats(false);
                }
            }
        }
        
        
    }

    function chooseGamePokemon(pokemonUser: Pokemon, atributos: string[]) {
        let bestPokemon = pokeGame[0];
        let worstPokemon = pokeGame[0];
        pokeGame.map((pokemon) => {
            pokemon.stats!.map((state) => {
                if (state["stat"].name === atributos[0]) {
                    if (state["base_stat"] > parseInt(atributos[1])) {
                        console.log("ganhei");
                        setPokeCaptured((state) => {
                            return state.filter(
                                (poke) => poke.name != pokemonUser.name
                            );
                        });
                    } else {
                        console.log("perdi");
                        setPokeGame((state) => {
                            return state.filter(
                                (poke) => poke.name != pokemon.name
                            );
                        });
                    }
                }
            });
            setPokeGameSelected(pokemon);
        });
        console.log();
    }

    return pokeCaptured.length > 0 ? (
        <ContainerGame>
            <div className="containerPokesUser">
                <h1 className="titlePokeUser" >Escolha seu Pokemon. Você possui {pokeCaptured.length} pokemons</h1>
                <div className="pokesUser">
                        {pokeCaptured.map((pokemon) => {
                            return (
                                <DivColored
                                    color={pokemon.types![0]["type"]["name"]}
                                    className={"pokeCard"}
                                    key={pokemon.id}
                                    onClick={(event) => createStats(pokemon, event)}
                                >
                                    <img
                                        src={pokemon.imageCard}
                                        alt=""
                                        className={"pokeImage"}
                                    />
                                    <h1>{pokemon.name}</h1>
                                    <Stats pokemon={pokemon} />
                                </DivColored>
                            );
                        })}
                   
                </div>
            </div>
            <div>
                <div>
                    {pokeGame.length > 0 ? (
                        <>
                            <h1 className="titlePokeGame">Pokemon da Máquina. Resta {pokeGame.length} pokemons</h1>
                            <DivColored
                                color={
                                    pokeGameSelected.types
                                        ? pokeGameSelected.types![0]["type"][
                                              "name"
                                          ]
                                        : "fire"
                                }
                                className={"pokeCard"}
                                key={pokeGameSelected.id}
                                display="none"
                            >
                                <img
                                    src={pokeGameSelected.imageCard}
                                    alt=""
                                    className={"pokeImage"}
                                />
                                <h1>{pokeGameSelected.name}</h1>
                                <Stats pokemon={pokeGameSelected} />
                            </DivColored>
                        </>
                    ) : (
                        <h1 className={"emptyTitle"}>
                            Não tenho mais pokemons. Parabens, você ganhou!
                        </h1>
                    )}
                </div>
            </div>
            <ChooseStats
                pokemon={pokeSelected}
                chooseGamePokemon={chooseGamePokemon}
                display={displayChooseStats}
                createStats = {createStats}
            />
            </ContainerGame>
    ) : (
        <h1 className="emptyTitleGame">Primeiro capture alguns pokemons</h1>
    );
}
