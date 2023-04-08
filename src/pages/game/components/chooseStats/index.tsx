import { MouseEvent } from "react";
import { Pokemon } from "../../../home";
import { ContainerChooseStats } from "./style";

interface PropsChooseStats {
    pokemon: Pokemon;
    display: boolean;
    chooseGamePokemon: (pokeUser: Pokemon, atributos: string[]) => void;
    createStats: (pokemon: Pokemon, event: MouseEvent) => void;
}

export function ChooseStats({ pokemon, chooseGamePokemon, display, createStats }: PropsChooseStats) {
    
    const stats = [];
    const displayNoneOrFlex = display ? "flex" : "none"

    function Selected(event: MouseEvent<HTMLElement>) {
        const selected = event.target as HTMLElement;
        const statsArray = selected.innerText.split(/[\s,]+/);
        chooseGamePokemon(pokemon, statsArray);
    }

    for (let obj in pokemon.stats) {
        stats.push(pokemon.stats[parseInt(obj)]);
    }

    return (
        <ContainerChooseStats display={displayNoneOrFlex} onClick={(event) => createStats(pokemon, event)}>
            <section className="containerStats">
                <h2>Selecione um atributo</h2>
                <section className={"statsInfomations"}>
                    {stats.map((stat) => {
                        return (
                            <div
                                key={stat.stat.url}
                                className={"statsNames"}
                                onClick={(event) => Selected(event)}
                            >
                                <p>{stat.stat.name}</p>
                                <p>{stat.base_stat > 150 ? 150 : stat.base_stat}</p>
                            </div>
                        );
                    })}
                </section>
            </section>
        </ContainerChooseStats>
    );
}
