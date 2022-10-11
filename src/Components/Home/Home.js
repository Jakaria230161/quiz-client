import React from 'react';
import CSSCard from '../CSSCard/CSSCard';
import GitCard from '../GitCard/GitCard';
import JsCard from '../JsCard/JsCard';
import ReactCard from '../ReactCard/ReactCard';

const Home = () => {
    return (         
        <div className='home-menu flex justify-between my-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
            <ReactCard></ReactCard>
            <JsCard></JsCard>
            <CSSCard></CSSCard>
            <GitCard></GitCard>
            </div>
        </div>
    );
};

export default Home;