import React, { useState } from 'react';
import {Rings} from 'react-loader-spinner'
import SearchBar from './components/SearchBar';
import Moviecard from './components/Moviecard';
import './App.css'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchMovies = async (query) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
            const data = await response.json();
            setMovies(data.docs);
        } catch (error) {
            setError('Failed to fetch movies. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className='search-movies-container'>
            <h1 className='main-heading'>Movie Search</h1>
            <SearchBar onSearch={fetchMovies} />
            {loading && <div data-testid="loader">
                            <Rings color="#00BFFF" height={80} width={80} />
                        </div>
            }
            {error && <div className="not-found">
                        <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" alt="not found" className='image-size' />
                        <p className='error-msg'>{error}</p>
                      </div>
            }
            <ul className='movies-list'>
                {movies.map((movie) => (
                    <Moviecard key={movie.key} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default App;

