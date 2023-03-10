import React, {useState} from 'react';

const ControlledInput = () => {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <div>
            <h1>{value}</h1>
            <input type='text' onChange={event => setValue(event.target.value)} value={value}/>
        </div>
    );
};

export default ControlledInput;