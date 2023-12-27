import React from 'react';

import './styles.css';
import { AboutCard } from '../../components/aboutCard';

function HomePage() {
    return (
        <div className='home'>
            <div className='stars'></div>
            <div className="lower-stars" ></div>
            <AboutCard />
        </div>
    )
}

export { HomePage };