import Countdown from '@/components/countdown/Countdown';
import React from 'react';

const Home = () => {
    const releaseDate = new Date(process.env.NEXT_PUBLIC_OPENING_DATE || '');
    return (
        <div>
            {/* <Countdown releaseDate={releaseDate}/> */}
        </div>
    );
};

export default Home;