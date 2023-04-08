import NotFound from "../../images/notFound.png";

export const LoadPokemon = async (index: any) => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const pokemonData = await data.json();
        return {
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
        };
    } catch {
        return {
            id: isNaN(index) ? NaN : parseInt(index),
            name: "Not Found",
            imageGif: NotFound,
        };
    }
};
