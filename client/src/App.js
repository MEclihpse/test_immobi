import './App.css';
import router from './routes'
import {RouterProvider} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;

