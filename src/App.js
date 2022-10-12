import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
