import React, { useState } from 'react';
import './index.css'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className='search-bar-container'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie"
                className='search'
            />
            <button onClick={handleSearch} className='search-btn'>Search</button>
        </div>
    );
};

export default SearchBar;
