import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <label className="form-check f6 ph2">
        <input
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input"
        />
        <label> </label>
        {label}
    </label>
);

export default Checkbox;