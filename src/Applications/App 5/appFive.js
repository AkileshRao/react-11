import React from 'react';
import './appFive.css';
import AppFiveCard from './appFiveCard';
import AppFiveData from './appFiveData';

const AppFive = () => {
    const movies = AppFiveData;
    return (
        <div className='appFive-container'>
            {
                movies.map((movie, index) => {
                    return <AppFiveCard className='appFive-card' title={movie.title} image={movie.image} description={movie.description} rating={movie.rating} key={index} />
                })
            }
        </div>
    )
}

export default AppFive;