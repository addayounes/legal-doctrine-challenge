import PropTypes from "prop-types";

import PokemonRow from "./row";
import Table from "../../components/table";
import pokemonTableHead from "../../constants/heads/pokemon";

const PokemonTable = ({ loading, paginationOptions }) => {
    return (
        <Table
            loading={loading}
            head={pokemonTableHead}
            RowElement={PokemonRow}
            paginationOptions={paginationOptions}
        />
    );
};

PokemonTable.propTypes = {
    loading: PropTypes.bool,
    paginationOptions: PropTypes.any,
};

export default PokemonTable;
