import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { getCartAndProductsData } from '../loaders/getCartAndProductsData';
import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';
import SingleQuiz from '../components/SingleQuiz/SingleQuiz';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blog/Blog';

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    loader: getCartAndProductsData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/home',
            element: <Home></Home>,
        },
        {
            path: '/quiz',
            element: <Quiz></Quiz>,
        },
        {
            path: '/quiz/:id',
            loader: async ({ params }) => {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            element: <SingleQuiz></SingleQuiz>,
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },

    ]
}])