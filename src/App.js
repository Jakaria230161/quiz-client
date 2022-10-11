
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './layout/Main';
import Header from '../src/Components/Header/Header'
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
const router = createBrowserRouter([
    {
    path: '/',
    element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
    children: [
            {
              path: '/',
              element: <Header></Header>
            },
            {
              path: '/',
              element:<Home></Home>
              
            },
            
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>,
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
    ]
    }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
