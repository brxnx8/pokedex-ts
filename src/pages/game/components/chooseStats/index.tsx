import { MouseEvent } from "react";
import { Pokemon } from "../../../home";
import { ContainerChooseStats } from "./style";

export interface IStats {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
}

interface PropsChooseStats {
    pokemon: Pokemon;
    display: boolean;
    chooseGamePokemon: (pokeUser: Pokemon, stat: IStats, index: number) => void;
    createStats: (event: MouseEvent) => void;
}

export function ChooseStats({
    pokemon,
    chooseGamePokemon,
    display,
    createStats,
}: PropsChooseStats) {
    const stats = [];
    const displayNoneOrFlex = display ? "flex" : "none";

    function Selected(stat: IStats, index: number) {
        chooseGamePokemon(pokemon, stat, index);
    }

    for (let obj in pokemon.stats) {
        stats.push(pokemon.stats[parseInt(obj)]);
    }

    return (
        <ContainerChooseStats
            display={displayNoneOrFlex}
            onClick={(event) => createStats(event)}
        >
            <section className="containerStats">
                <h2>Selecione um atributo</h2>
                <section className={"statsInfomations"}>
                    {stats.map((stat, index) => {
                        return (
                            <div
                                key={stat.stat.url}
                                className={"statsNames"}
                                onClick={() => Selected(stat, index)}
                            >
                                <p>{stat.stat.name}</p>
                                <p>
                                    {stat.base_stat > 150
                                        ? 150
                                        : stat.base_stat}
                                </p>
                            </div>
                        );
                    })}
                </section>
            </section>
        </ContainerChooseStats>
    );
}
