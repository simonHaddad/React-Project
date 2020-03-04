import React from 'react';

const TextInput = props => {
    const { id, label, hint, style, onChange } = props;

    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    return <div className="form-group" style={style}>
        <label htmlFor={id}>{label}</label>
        <input type="text" className="form-control" id={id} placeholder={hint} onChange={handleChange} />
    </div>
}

export default TextInput;