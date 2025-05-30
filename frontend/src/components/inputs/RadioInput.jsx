import React from 'react'


const RadioInput = ({ name, options, selectedValue, onChange, error }) => (
    <div className="mb-3">
      <label className="form-label">Gender</label>
      <div className="d-flex gap-3">
        {options.map((option) => (
          <label key={option} className="custom-radio-label">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );

export default RadioInput
