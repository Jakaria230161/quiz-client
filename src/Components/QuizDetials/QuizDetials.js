import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetials = ({ options }) => {


    const checkOption = (option) => {
        // console.log(option);
        // console.log('C:', options.correctAnswer);
        if (option === options.correctAnswer) {
            toast.success('You are right', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
        } else {
            toast.error('You are wrong', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
        }

    }
    const currentAns = (options) => {
        toast.info(`Correct Ans is: ${options.correctAnswer}`, { autoClose: 500, position: toast.POSITION.TOP_CENTER })
    }

    return (
        <div>
            <ToastContainer />
            <div className='bg-white p-6 rounded shadow-lg lg:py-6 border border-sky-500 m-20'>
                <div className='flex md:space-x-20 justify-between'>
                    <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>Quiz: {options.question}</p>
                    <svg onClick={() => currentAns(options)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                {/* <p className='text-gray-700 '>Options:</p> */}
                <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
                    <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
                        {
                            options.options.map(option => <div>
                                <div className=''>
                                    <input
                                        onClick={() => checkOption(option)}
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        className="ml-5 dark:bg-gray-800"
                                    />
                                    <label className="text-black-700 dark:text-gray-400 text-lg ml-4">
                                        {option}
                                    </label>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>

            </div>



        </div>
    );
};

export default QuizDetials;