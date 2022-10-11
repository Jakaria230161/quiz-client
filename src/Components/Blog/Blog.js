import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const notify = () => toast("Thank you so much!");
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">These Questions are very very common in the Interview. That's why we have to know as well.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 text-orange-600 text-2xl font-bold py-6 focus:outline-none focus-visible:ring-violet-400">What is the purpose of React Router?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-green-600 text-2xl font-bold ">How does Context API works?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-purple-600 text-2xl font-bold ">What is useRef?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly. </p>
			</details>
		</div>
	</div>
            </section>
             <button onClick={notify}><span className='text-xl bg-blue-600 font-semibold text-white py-2 border rounded-lg px-4'>Click Me</span></button>
        <ToastContainer />
        </div>
    );
};

export default Blog;