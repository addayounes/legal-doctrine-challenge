import PropTypes from "prop-types";

const TableHead = ({ head }) => {
    return (
        <thead className='text-xs text-center font-thin text-gray-400 bg-gray-50'>
            <tr>
                {head.map((col, index) => (
                    <th key={index} className='px-6 py-4'>
                        {col}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHead.propTypes = {
    head: PropTypes.arrayOf(PropTypes.string),
};

export default TableHead;
