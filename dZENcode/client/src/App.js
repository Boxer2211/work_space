import './App.css';

import ComentArea from './components/ComentArea';
import HotelBookingTimeline from './components/HotelBookingTimeline';
import NavBar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <HotelBookingTimeline />
      {/* <ComentArea /> */}

    </div>
  );
}

export default App;
