import PropTypes from "prop-types";

import TableHead from "./head";
import Pagination from "./pagination";

const Table = ({ head, loading, RowElement, paginationOptions }) => {
    // TODO: add a loading indicator
    if (loading) return <div>loading...</div>;

    return (
        <div className='relative overflow-x-auto'>
            <div className='shadow-xl shadow-gray-300/20 rounded-t-xl rounded-b-xl overflow-y-hidden'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <TableHead head={head} />
                    <tbody>
                        {paginationOptions.currentData.length ? (
                            paginationOptions.currentData.map((row, index) => (
                                <RowElement {...row} key={index} />
                            ))
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>

                {/* In case no data was found */}
                {!paginationOptions.currentData.length && <NoData />}
            </div>
            <Pagination options={paginationOptions} />
        </div>
    );
};

const NoData = () => (
    <div className='flex justify-center py-10'>
        <h1 className='text-xl font-semibold text-gray-500'>No data was found</h1>
    </div>
);

Table.propTypes = {
    data: PropTypes.array,
    head: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
    RowElement: PropTypes.any,
    paginationOptions: PropTypes.any,
};

export default Table;
