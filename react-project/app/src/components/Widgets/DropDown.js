import React from 'react';

const DropDown = props => {
    const { id, label, options, className, style, onChange } = props;

    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    return <div className="form-group" className={className} style={style}>
        <label htmlFor={id}>{label}</label>
        <select className="form-control" id={id} onChange={handleChange}>
            {options.map((el) => {
                return <option key={el.key} value={el.key}>{el.label}</option>
            })}
        </select>
    </div>
}

export default DropDown;