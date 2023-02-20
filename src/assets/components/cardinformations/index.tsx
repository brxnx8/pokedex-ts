import { MouseEvent, useEffect, useState } from "react";
import { Pokemon } from "../../../App";
import { DivColored, Types } from "../divColors/div.styles";
import { Stats } from "../stats";

import PokeballStopped from "../../images/pokeballStopped.gif";
import PokeballRotated from "../../images/pokeballRotated.gif";
import PokeballStars from "../../images/pokeballStars.png";

import style from "./cardinformations.module.css";


interface PropsCardInfo{
    pokemon: Pokemon;
    classCard: string;
    ToggleClassCard: (event: MouseEvent<HTMLElement>) => void;
    addPokeCaptured: (pokemon: Pokemon) => void;
    pokeCaptured: Pokemon[];
}

export function CardInfo({ pokemon, classCard, ToggleClassCard, addPokeCaptured, pokeCaptured }: PropsCardInfo) {
    
    const [Pokeball, setPokeball] = useState(PokeballStopped);
    
    useEffect(() => {
        let image = PokeballStopped;
        pokeCaptured.forEach(poke => {
            if(poke.name === pokemon.name){
                image = PokeballStars;
            }
        })
        setPokeball(image);
    }, [pokemon]);

    let types = new Array();

    for (let obj in pokemon.types) {
        types.push(pokemon.types[parseInt(obj)].type.name);
    }

    function TogglePokeball() {
        if(Pokeball != PokeballStars){  
            if(pokeCaptured.length < 5){
                addPokeCaptured(pokemon);
                setPokeball(PokeballRotated);
                setTimeout(() => setPokeball(PokeballStars), 1200);
            }else{
                window.alert("já foram capturados os 5 pokemons possiveis.")
            }
        }

    }

    return (
        
        <section className={classCard} onClick={ToggleClassCard}>
            <div className={style.card}>
                
                <DivColored 
                    color={types[0]} 
                    className={style.divColorCard}
                >
                    <img src={Pokeball} alt="" width={"40px"} height={"40px"} onClick={TogglePokeball} className={style.pokeball}/>
                    <img src={pokemon.imageCard} alt="" className={style.pokeImage}/>
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
                        <div>{`${(pokemon.weight)! / 10}kg`}</div>
                        <div>{`${(pokemon.height)! / 10}m`}</div>
                    </section>
                    <Stats pokemon={pokemon} />
                </div>
            </div>
        </section>
    
    );

}
