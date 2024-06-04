
import dynamic from 'next/dynamic';
import React from 'react';

const Searchbar = dynamic(() => import('@/components/Searchbar/Searchbar'), { suspense: true });
const Countdown = dynamic(() => import('@/components/countdown/Countdown'), { suspense: true });
const Home = () => {
    const releaseDate = new Date(process.env.NEXT_PUBLIC_OPENING_DATE || '');
    return (
        <div>
            <Searchbar/>
            {/* <Countdown releaseDate={releaseDate}/> */}
        </div>
    );
};

export default Home;