import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetials from '../QuizDetials/QuizDetials';

const SingleQuiz = () => {
    const quiz = useLoaderData()
    const { name } = quiz.data;
    return (
        <div>
            <h2 className='text-2xl font-bold'>Quiz of {name}</h2>

            {
                quiz.data.questions.map(options => <QuizDetials
                    key={options.id}
                    options={options}
                ></QuizDetials>)
            }

        </div>
    );
};

export default SingleQuiz;