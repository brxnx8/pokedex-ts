import { Pokemon } from "../../pages/home/index";
import style from "./stats.module.css";

interface PropsStats {
    pokemon: Pokemon;
}

export function Stats({ pokemon }: PropsStats) {
    const stats = [];

    for (let obj in pokemon.stats) {
        stats.push(pokemon.stats[parseInt(obj)]);
    }

    return (
        <section className={style.statsConteiner}>
            <h2>Base Stats</h2>
            <section className={style.statsInfomations}>
                {stats.map((stat) => {
                    return (
                        <div key={stat.stat.url} className={style.statsNames}>
                            <p>{stat.stat.name}</p>
                            <div className={style.statsValues}>
                                <p>
                                    {stat.base_stat > 200
                                        ? 200
                                        : stat.base_stat}
                                </p>
                                <div className={style.input}>
                                    <div
                                        style={{
                                            width: `${
                                                stat.base_stat > 200
                                                    ? 200
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
        </section>
    );
}
