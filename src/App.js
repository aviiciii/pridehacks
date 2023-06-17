import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/events/Events';
// import Fundraisers from './components/Fundraisers';
// import News from './components/News';
// import Hangout from './components/Hangout';

import HomePage from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CreateEvent from './components/create-event/CreateEvent';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<HomePage/>} />
        <Route path="/events" caseSensitive={false} element={<Events/>} />
        <Route path="/events/create" caseSensitive={false} element={<CreateEvent/>} />

        {/* <Route path="/fundraisers" component={Fundraisers} />
        <Route path="/news" component={News} />
        <Route path="/hangout" component={Hangout} /> */}
      </Routes>
    </Router>
  );
}

export default App;
