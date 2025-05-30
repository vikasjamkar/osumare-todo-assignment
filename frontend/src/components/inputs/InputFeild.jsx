import React from 'react'

const InputField = ({ label, id, name, type = "text", value, onChange, error, placeholder }) => (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className={`custom-input ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );

export default InputField
