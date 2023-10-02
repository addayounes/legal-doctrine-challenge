import { useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import { TbHeartBolt } from "react-icons/tb";

import TextField from "../../components/textfield";
import { getMinPower, getMaxPower } from "../../utils/powerMinMax";

/* eslint-disable react/prop-types */
const Header = ({ query, setQuery, powerThreshold, setPowerThreshold, currentData }) => {
    const memoizedMinValue = useMemo(() => getMinPower(currentData), [currentData]);
    const memoizedMaxValue = useMemo(() => getMaxPower(currentData), [currentData]);
    return (
        <main className='p-6 space-y-6 shadow-xl shadow-gray-300/20 mb-10'>
            <div className='flex items-center gap-4'>
                <div className='basis-full'>
                    <TextField
                        value={query}
                        id='search-query'
                        Icon={<BsSearch />}
                        placeholder='Search...'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className='basis-full'>
                    <TextField
                        type='number'
                        id='search-power'
                        value={powerThreshold}
                        Icon={<TbHeartBolt />}
                        placeholder='Power threshold'
                        onChange={(e) => setPowerThreshold(e.target.valueAsNumber)}
                    />
                </div>
            </div>
            <div className='font-medium'>
                <h3>Min Power: {currentData.length ? memoizedMinValue : "-"}</h3>
                <h3>Max Power: {currentData.length ? memoizedMaxValue : "-"}</h3>
            </div>
        </main>
    );
};

export default Header;
