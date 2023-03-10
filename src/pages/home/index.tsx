import {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useContext,
    useEffect,
    useState,
} from "react";
import { Button } from "./components/button";
import { CardInfo } from "./components/cardinformations";
import { Types } from "../../assets/componentsDefault/divColors/div.styles";

import Pokedex from "../../assets/images/pokedex.png";
import Load from "../../assets/images/load.gif";
import NotFound from "../../assets/images/notFound.png";
import { CapturedContext } from "../../contexts/capturedContext";

export interface Pokemon {
    id: number;
    name?: string;
    imageGif?: string;
    imageDefault?: string;
    imageCard?: string;
    stats?: [
        {
            base_stat: number;
            effort: number;
            stat: { name: string; url: string };
        }
    ];
    types?: [{ slot: number; type: { name: Types; url: string } }];
    weight?: number;
    height?: number;
}

export function Home() {
    const [number, setNumber] = useState<number | string>(1);

    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

    const [classCard, setClassCard] = useState("backgroundNone");

    const [valueSearch, setValueSearch] = useState("");

    const { pokeCaptured, setPokeCaptured } = useContext(CapturedContext);

    const loadPokemon = (number: any) => {
        const data = fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then((response) => response.json())
            .then((pokemonData) => {
                setPokemon({
                    id: pokemonData.id,
                    name: pokemonData.name,
                    imageGif:
                        pokemonData["sprites"]["versions"]["generation-v"][
                            "black-white"
                        ]["animated"]["front_default"],
                    imageDefault: pokemonData["sprites"]["front_default"],
                    imageCard:
                        pokemonData["sprites"]["other"]["official-artwork"][
                            "front_default"
                        ],
                    stats: pokemonData.stats,
                    types: pokemonData.types,
                    weight: pokemonData.weight,
                    height: pokemonData.height,
                });
            })
            .catch((erro) => {
                console.clear();
                setPokemon({
                    id: isNaN(number) ? NaN : parseInt(number),
                    name: "Not Found",
                    imageGif: NotFound,
                });
            });
    };

    useEffect(() => {
        setPokemon({
            id: Number(number),
        });
        setTimeout(() => {
            loadPokemon(number);
        }, 700);
    }, [number]);

    function NumberLessOrPlus(bool: boolean) {
        if (bool) {
            setNumber(pokemon.id + 1);
        } else {
            setNumber(pokemon.id > 1 ? pokemon.id - 1 : pokemon.id);
        }
        setValueSearch("");
    }

    function ToggleClassCard(event: MouseEvent<HTMLElement>) {
        if (
            pokemon.imageCard &&
            pokemon.name &&
            event.currentTarget === event.target
        ) {
            if (classCard === "backgroundBlock") {
                setClassCard("backgroundNone");
            } else {
                setClassCard("backgroundBlock");
            }
        }
    }

    function ChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setValueSearch(event.target.value);
        if (event.target.value === "" && pokemon.imageGif === NotFound) {
            setNumber(1);
        }
    }

    function ChangeNumber(event: FormEvent) {
        event.preventDefault();
        if (valueSearch != "") {
            setNumber(valueSearch);
        }
        if (parseInt(valueSearch) < 1) {
            setNumber(1);
        }
    }

    function addPokeCaptured(pokemon: Pokemon) {
        setPokeCaptured([...pokeCaptured, pokemon]);
    }

    return (
        <div className="main">
            <img
                src={
                    pokemon.imageGif
                        ? pokemon.imageGif
                        : pokemon.imageDefault
                        ? pokemon.imageDefault
                        : pokemon.imageCard
                        ? pokemon.imageCard
                        : Load
                }
                alt=""
                className="poke-image"
                onClick={ToggleClassCard}
            />
            <img src={Pokedex} alt="pokedex" className="pokedex" />
            <h1 className="poke-name" onClick={ToggleClassCard}>
                <span>
                    {!pokemon.name || pokemon.name === "Not Found"
                        ? ""
                        : pokemon.id}{" "}
                    -{" "}
                </span>
                {pokemon.name ? pokemon.name : "Loading..."}
            </h1>
            <form onSubmit={ChangeNumber}>
                <input
                    type="search"
                    className="searchPokemon"
                    placeholder="Name or Number..."
                    onChange={ChangeValue}
                    value={valueSearch}
                    name="search"
                />
                <button className="ButtonSearchPokemon">Search</button>
            </form>
            <div className="buttons">
                <Button action="< Prev" NumberLessOrPlus={NumberLessOrPlus} />
                <Button action="Next >" NumberLessOrPlus={NumberLessOrPlus} />
            </div>
            <CardInfo
                pokemon={pokemon}
                classCard={classCard}
                ToggleClassCard={ToggleClassCard}
                addPokeCaptured={addPokeCaptured}
            />
        </div>
    );
}
