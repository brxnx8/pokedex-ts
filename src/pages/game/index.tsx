import { MouseEvent, useContext, useState } from "react";
import { PokemonsCapturedContext } from "../../contexts/pokemonsCapturedContext";
import { Stats } from "../../assets/usual/components/stats";
import { DivColored } from "../../assets/usual/components/divColors/div.styles";
import { Pokemon } from "../home";
import { PokesGameContext } from "../../contexts/pokemonsGameContext";
import { ChooseStats, IStats } from "./components/chooseStats";
import { ContainerGame } from "./style";
import { Button } from "../home/components/button";
import { FinishGame } from "./components/finshGame";

export function Game() {
    const [pokeGameSelected, setPokeGameSelected] = useState({} as Pokemon);
    const [indexPokemonCaptured, setIndexPokemonCaptured] = useState(0);
    const [displayChooseStats, setDisplayChooseStats] = useState(false);
    const [displayFinishGame, setDisplayFinishGame] = useState("none");
    const [textFinishGame, setTextFinishGame] = useState("none");
    const { pokesGame, setPokesGame } = useContext(PokesGameContext);
    const { pokeCaptured, setPokeCaptured } = useContext(
        PokemonsCapturedContext
    );

    function createStats(event: MouseEvent) {
        if (
            event.currentTarget.nodeName === "DIV" ||
            event.currentTarget === event.target
        ) {
            if (displayChooseStats === false) {
                setDisplayChooseStats(true);
            } else {
                setDisplayChooseStats(false);
            }
        }
    }

    function carrousselPokeCaptured(bool: boolean) {
        if (bool) {
            if (indexPokemonCaptured < pokeCaptured.length - 1) {
                setIndexPokemonCaptured((state) => state + 1);
            }
        } else {
            if (indexPokemonCaptured > 0) {
                setIndexPokemonCaptured((state) => state - 1);
            }
        }
    }

    function ResetPokes() {
        setPokeCaptured([]);
        setPokesGame([]);
    }

    function RestartGame(IsUserLose: boolean) {
        setInterval(() => {
            setDisplayFinishGame("flex");
            if (IsUserLose) {
                setTextFinishGame("Que pena, você perdeu!");
            } else {
                setTextFinishGame("Parabens, você ganhou!");
            }
        }, 2000);
    }

    function RemovePokemon(IsUser: boolean, pokemon: Pokemon) {
        if (
            (pokesGame.length <= 1 && !IsUser) ||
            (pokeCaptured.length <= 1 && IsUser)
        ) {
            RestartGame(IsUser);
        } else {
            if (IsUser) {
                setPokeCaptured((state) =>
                    state.filter((poke) => poke.name != pokemon.name)
                );
                setIndexPokemonCaptured(0);
            } else {
                setPokesGame((state) =>
                    state.filter((poke) => poke.name != pokemon.name)
                );
            }
        }
        
    }

    function chooseGamePokemon(
        pokemonUser: Pokemon,
        stat: IStats,
        index: number
    ) {
        let indexBestPokemonGame = 0;
        let indexWorsePokemonGame = 0;

        setDisplayChooseStats(false);

        pokesGame.forEach((pokemon, indexPokemon) => {
            const statBest =
                pokesGame[indexBestPokemonGame]["stats"]![index].base_stat;
            const statWorse =
                pokesGame[indexWorsePokemonGame]["stats"]![index].base_stat;
            const statCompare = pokemon["stats"]![index].base_stat;

            if (statCompare > statBest) {
                indexBestPokemonGame = indexPokemon;
            } else if (statCompare < statWorse) {
                indexWorsePokemonGame = indexPokemon;
            }
        });
        const statBest =
            pokesGame[indexBestPokemonGame]["stats"]![index].base_stat;
        const statWorse =
            pokesGame[indexWorsePokemonGame]["stats"]![index].base_stat;

        switch (true) {
            case stat.base_stat < statWorse:
                setTimeout(() => {
                    setPokeGameSelected(pokesGame[indexWorsePokemonGame]);
                    setTimeout(() =>{
                        setPokeGameSelected({} as Pokemon);
                        RemovePokemon(true, pokemonUser)
                    }, 2000);
                }, 2000);
                break;
            case stat.base_stat < statBest:
                setTimeout(() => {
                    setPokeGameSelected(pokesGame[indexBestPokemonGame]);
                    setTimeout(() =>{
                        setPokeGameSelected({} as Pokemon);
                        RemovePokemon(true, pokemonUser)
                    }, 2000);
                }, 2000);
                break;
            case stat.base_stat === statWorse:
                setTimeout(() => {
                    setPokeGameSelected(pokesGame[indexWorsePokemonGame]);
                    setTimeout(() => {
                        setPokeGameSelected({} as Pokemon);
                        RemovePokemon(false, pokesGame[indexWorsePokemonGame]);
                    }, 2000);
                }, 2000);
                break;
            case stat.base_stat === statBest:
                setTimeout(() => {
                    setPokeGameSelected(pokesGame[indexWorsePokemonGame]);
                    setTimeout(() => {
                        setPokeGameSelected({} as Pokemon);
                        RemovePokemon(false, pokesGame[indexWorsePokemonGame]);
                    }, 2000);
                }, 2000);
                break;
            default:
                setTimeout(() => {
                    setPokeGameSelected(pokesGame[indexWorsePokemonGame]);
                    setTimeout(() => {
                        setPokeGameSelected({} as Pokemon);
                        RemovePokemon(false, pokesGame[indexWorsePokemonGame]);
                    }, 2000);
                }, 2000);
                break;
        }

    }

    return pokeCaptured.length > 0 ? (
        <ContainerGame>
            <div className="containerPokesUser">
                <h1 className="titlePokeUser">
                    Escolha seu Pokemon. Você possui {pokeCaptured.length}{" "}
                    pokemons
                </h1>
                <div className="pokesUser">
                    <DivColored
                        color={
                            pokeCaptured[indexPokemonCaptured].types![0][
                                "type"
                            ]["name"]
                        }
                        className={"pokeCard"}
                        key={pokeCaptured[indexPokemonCaptured].id}
                        onClick={(event) => createStats(event)}
                    >
                        <img
                            src={pokeCaptured[indexPokemonCaptured].imageCard}
                            alt=""
                            className={"pokeImage"}
                        />
                        <h1>{pokeCaptured[indexPokemonCaptured].name}</h1>
                        <Stats pokemon={pokeCaptured[indexPokemonCaptured]} />
                    </DivColored>
                    <div className="buttonsCarroussel">
                        <Button
                            NumberLessOrPlus={carrousselPokeCaptured}
                            action="< Ant"
                        />
                        <Button
                            NumberLessOrPlus={carrousselPokeCaptured}
                            action="Prox >"
                        />
                    </div>
                </div>
            </div>
            <div className="containerPokeGame">
                <h1 className="titlePokeGame">
                    Pokemon da Máquina. Restam {pokesGame.length} pokemons
                </h1>
                <div className="pokeGame">
                    {pokeGameSelected.name && (
                        <DivColored
                            color={pokeGameSelected.types![0]["type"]["name"]}
                            className={"pokeCard"}
                            key={pokeGameSelected.id}
                        >
                            <img
                                src={pokeGameSelected.imageCard}
                                alt=""
                                className={"pokeImage"}
                            />
                            <h1>{pokeGameSelected.name}</h1>
                            <Stats pokemon={pokeGameSelected} />
                        </DivColored>
                    )}
                </div>
            </div>
            <ChooseStats
                pokemon={pokeCaptured[indexPokemonCaptured]}
                chooseGamePokemon={chooseGamePokemon}
                display={displayChooseStats}
                createStats={createStats}
            />
            <FinishGame
                display={displayFinishGame}
                text={textFinishGame}
                reset={() => ResetPokes()}
            />
        </ContainerGame>
    ) : (
        <h1 className="emptyTitleGame">Primeiro capture alguns pokemons</h1>
    );
}
