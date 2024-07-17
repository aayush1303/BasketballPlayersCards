import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
        <div className='player-cards'>
            <div className="player-card">
                <div className='image-container'>
                    <h2 className="player-name">{name}</h2>
                    <img src={image} alt={`${name}`} className="player-image" />
                </div>
                <div className='detail-container'>
                    <p className="player-position">{position}</p>
                    <div className="player-stats">
                        <p>Points per Game <span>{stats.pointsPerGame}</span></p>
                        <p>Assists per Game <span>{stats.assistsPerGame}</span></p>
                        <p>Rebounds per Game <span>{stats.reboundsPerGame}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketballPlayerCard;
