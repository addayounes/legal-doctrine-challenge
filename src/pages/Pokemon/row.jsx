import { calculatePokemonPower } from "../../utils/calculatePokemonPower";

/* eslint-disable react/prop-types */
const PokemonRow = (props) => {
    return (
        <tr className='bg-white border-b last:border-0 text-center text-base font-medium text-gray-700 whitespace-nowrap'>
            <td className='px-6 py-4'>{props.id}</td>
            <td className='px-6 py-4'>{props.name}</td>
            <td className='px-6 py-4'>{props.type}</td>
            <td className='px-6 py-4'>{props.hp}</td>
            <td className='px-6 py-4'>{props.attack}</td>
            <td className='px-6 py-4'>{props.defense}</td>
            <td className='px-6 py-4'>{props.special_attack}</td>
            <td className='px-6 py-4'>{props.special_defense}</td>
            <td className='px-6 py-4'>{props.speed}</td>
            <td className='px-6 py-4'>{calculatePokemonPower(props)}</td>
        </tr>
    );
};

export default PokemonRow;
