import React from "react";

const InputForm = ({ label, type, name, value, onChange }) => {
  return (
    <div className="col-6 p-1">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default InputForm;
