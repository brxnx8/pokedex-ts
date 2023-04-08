import { Pokemon } from "../../../../pages/home";
import { ConteinerStats } from "./style";

interface PropsStats {
    pokemon: Pokemon;
}

export function Stats({ pokemon }: PropsStats) {
    const stats = [];

    for (let obj in pokemon.stats) {
        stats.push(pokemon.stats[parseInt(obj)]);
    }

    return (
        <ConteinerStats>
            <h2>Base Stats</h2>
            <section className={"statsInfomations"}>
                {stats.map((stat) => {
                    return (
                        <div key={stat.stat.url} className={"statsNames"}>
                            <p>{stat.stat.name}</p>
                            <div className={"statsValues"}>
                                <p>
                                    {stat.base_stat > 150
                                        ? 150
                                        : stat.base_stat}
                                </p>
                                <div className={"input"}>
                                    <div
                                        style={{
                                            width: `${
                                                stat.base_stat > 150
                                                    ? 150
                                                    : stat.base_stat
                                            }px`,
                                            height: "85%",
                                            backgroundColor: "#fff",
                                            border: "none",
                                            boxShadow: "1.5px 1.5px #707070",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </ConteinerStats>
    );
}
