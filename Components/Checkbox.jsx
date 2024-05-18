import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
