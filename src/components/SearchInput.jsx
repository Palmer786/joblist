import React from "react";

export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange()}
    />
  );
};
