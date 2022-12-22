
import List from './Components/List';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <List />
    </BrowserRouter>
  );
}

export default App;
