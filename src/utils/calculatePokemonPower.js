export const calculatePokemonPower = (pokemon) => {
    return (
        pokemon.hp +
        pokemon.attack +
        pokemon.defense +
        pokemon.special_attack +
        pokemon.special_defense +
        pokemon.speed
    );
};
