import React, { createContext } from 'react';
import { Outlet, RouterProvider, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);

const Main = () => {
    const quiz = useLoaderData()
    return (
        <div>
            <QuizContext.Provider value={quiz}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>

        </div>
    );
};

export default Main;