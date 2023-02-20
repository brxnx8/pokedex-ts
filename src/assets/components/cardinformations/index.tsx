import { MouseEvent } from "react";
import { Pokemon } from "../../../App";
import { DivColored, Types } from "../divColors/div.styles";
import { Stats } from "../stats";
import style from "./cardinformations.module.css";


interface PropsCardInfo{
    pokemon: Pokemon;
    classCard: string;
    ToggleClassCard: (event: MouseEvent<HTMLElement>) => void
}

export function CardInfo({ pokemon, classCard, ToggleClassCard }: PropsCardInfo) {
    
    let types = new Array();

    for (let obj in pokemon.types) {
        types.push(pokemon.types[parseInt(obj)].type.name);
    }

    return (
        
        <section className={classCard} onClick={ToggleClassCard}>
            <div className={style.card}>
                <DivColored 
                    color={types[0]} 
                    className={style.divColorCard}
                >
                    <img src={pokemon.imageCard} alt="" />
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
