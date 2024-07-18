import React, { useEffect, useState } from 'react';
import './index.css'

const Moviecard = ({ movie }) => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const fetchDogImage = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogImage(data.message);
        };

        fetchDogImage();
    }, []);

    return (
        <div className="movie-card">
            <img src={dogImage} alt="Random Dog" className='movie-image' />
            <div className='details'>
                <h2 className='movie-title'>Title: {movie.title}</h2>
                <p className='movie-details'>Author: {movie.author_name && movie.author_name.join(', ')}</p>
                <p className='year'>Published Date: {movie.first_publish_year}</p>
            </div>
        </div>
    );
};

export default Moviecard;
