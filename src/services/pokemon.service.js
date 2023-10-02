import api from "../utils/axios";

// files in the public directory are served at the root path.
export const fetchPokemons = async () => api.get("./pokemon.json");
