import { calculatePokemonPower } from "./calculatePokemonPower";

export const getMinPower = (data) => Math.min(...data.map((d) => calculatePokemonPower(d)));
export const getMaxPower = (data) => Math.max(...data.map((d) => calculatePokemonPower(d)));
