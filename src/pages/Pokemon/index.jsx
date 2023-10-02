import { useEffect, useMemo, useState } from "react";

import Header from "./header";
import PokemonTable from "./table";
import { usePagination } from "../../hooks/usePagination";
import { fetchPokemons } from "../../services/pokemon.service";
import { calculatePokemonPower } from "../../utils/calculatePokemonPower";

const queryCallback = (pokemon, query) => {
    if (query === "") return pokemon;
    else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) return pokemon;
};

const thresholdCallback = (pokemon, threshold) => {
    if (!threshold) return pokemon;
    else if (calculatePokemonPower(pokemon) >= threshold) return pokemon;
};

const PokemonList = () => {
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [powerThreshold, setPowerThreshold] = useState();

    const pokemonsSearchResult = useMemo(
        () =>
            pokemons
                .filter((pokemon) => queryCallback(pokemon, query))
                .filter((pokemon) => thresholdCallback(pokemon, powerThreshold))
                .map((p) => p),
        [pokemons, query, powerThreshold]
    );

    const paginationOptions = usePagination(pokemonsSearchResult);

    const setupPokemons = async () => {
        try {
            setLoading(true);
            const { data } = await fetchPokemons();
            setPokemons(data);
        } catch (error) {
            console.log(error);
            // error hadnling
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setupPokemons();
    }, []);

    return (
        <main className='p-6'>
            <Header
                query={query}
                setQuery={setQuery}
                powerThreshold={powerThreshold}
                setPowerThreshold={setPowerThreshold}
                currentData={paginationOptions.currentData}
            />
            <PokemonTable paginationOptions={paginationOptions} loading={loading} />
        </main>
    );
};

export default PokemonList;
