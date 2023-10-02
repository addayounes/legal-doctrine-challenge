/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ options }) => {
    return (
        <div className='flex items-center justify-end gap-6 p-4 font-medium'>
            <div className='flex items-center gap-4'>
                <p>Rows per page:</p>
                <SelectRowsPerPage options={options} />
            </div>
            <div className='select-none'>{options.pageRange}</div>
            <div className='flex items-center gap-4'>
                <IoIosArrowBack
                    onClick={options.prevPage}
                    className='cursor-pointer text-gray-500 hover:text-gray-900'
                />
                <IoIosArrowForward
                    onClick={options.nextPage}
                    className='cursor-pointer text-gray-500 hover:text-gray-900'
                />
            </div>
        </div>
    );
};

const SelectRowsPerPage = ({ options }) => {
    return (
        <select
            value={options.rowsPerPage}
            onChange={(e) => options.setRowsPerPage(parseInt(e.target.value))}
            id='rows-per-page'>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
        </select>
    );
};

export default Pagination;
