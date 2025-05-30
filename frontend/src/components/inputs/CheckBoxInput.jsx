import React from 'react'

const CheckBoxInput = ({ name, options, selectedValues, onChange, error }) => (
  <div className="mb-3">
    <label className="form-label">Language</label>
    <div className="d-flex flex-column gap-3">
      {options.map((option) => (
        <label key={option} className="custom-checkbox-label">
          <input
            type="checkbox"
            name={name}
            value={option}
            onChange={onChange}
            checked={selectedValues.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
    {error && <div className="text-danger mt-1">{error}</div>}
  </div>
);

export default CheckBoxInput
