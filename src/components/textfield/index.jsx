/* eslint-disable react/prop-types */
const TextField = ({ Icon, ...props }) => {
    return (
        <label htmlFor={props.id}>
            <div className='relative'>
                {Icon && (
                    <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500'>
                        {Icon}
                    </div>
                )}
                <input
                    {...props}
                    className={`pr-6 py-2.5 w-full rounded border outline-none focus:ring-2 ring-blue-500
                ${Icon ? "pl-10" : "pl-6"}`}
                />
            </div>
        </label>
    );
};

export default TextField;
