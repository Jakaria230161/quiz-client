import React from 'react';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ReactCard = () => {
    const notify = () => toast("Wow so easy!Welcome to React Quiz");
    return (
        <div className="max-w-xs border rounded-lg mb-40 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="http://developerpitstop.com/wp-content/uploads/2021/07/React.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between  p-6 space-y-8 bg-pink-400">
		<div className="space-y-2">
			<h2 className="text-5xl font-semibold tracking-wide">React</h2>
		</div>
		<button onClick={notify} type="button" className="px-8 py-3 font-semibold border text-2xl text-black rounded-full dark:bg-white-100 dark:text-gray-800">Start Now</button>
            </div>
            <ToastContainer />
</div>
    );
};

export default ReactCard;