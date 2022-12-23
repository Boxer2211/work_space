
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './Components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
