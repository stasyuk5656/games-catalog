import { FC } from "react";

import "./SearchItems.css";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

interface ButtonProps {
  label: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="searchButton" onClick={onSearch}>
          <i className="fa fa-search">Go</i>
        </button>
      </div>
    </div>
  );
};

export const Button: FC<ButtonProps> = ({ label, onClick, isDisabled }) => {
  return (
    <button
      className={`button ${isDisabled ? "button-disable" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
