import React from 'react';
import { usePatients } from '../context/PatientContext';
import './SearchBar.css';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = usePatients();

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search patients by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button
            className="clear-button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
