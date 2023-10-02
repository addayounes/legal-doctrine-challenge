/* eslint-disable react/prop-types */
const TextField = ({ ...props }) => {
    return (
        <label htmlFor={props.id}>
            <input
                {...props}
                className='px-6 py-2.5 w-full rounded border outline-none focus:ring-2 ring-blue-500'
            />
        </label>
    );
};

export default TextField;
