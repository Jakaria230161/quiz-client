import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Root from '../Root/Root'
import Topics from "../Topics/Topics";


const router = createBrowserRouter([
    {
    path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/about',
                element: <About></About>
            }
    ]
    }
])

export default router;
