import React from 'react';
import CSSCard from '../CSSCard/CSSCard';
import GitCard from '../GitCard/GitCard';
import JsCard from '../JsCard/JsCard';
import ReactCard from '../ReactCard/ReactCard';

const Home = () => {
    return (
        <div className='home-menu flex justify-between mx-10 my-10'>
            <ReactCard></ReactCard>
            <JsCard></JsCard>
            <CSSCard></CSSCard>
            <GitCard></GitCard>
        </div>
    );
};

export default Home;