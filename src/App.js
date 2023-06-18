import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/events/Events';
// import Fundraisers from './components/Fundraisers';
// import News from './components/News';
// import Hangout from './components/Hangout';

import HomePage from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CreateEvent from './components/create-event/CreateEvent';
import NewsContainer from './components/news/News';
import Fundraisers from './components/fundraisers/Fundraiser';
import CreateFundraiser from './components/fundraisers/CreateFundraiser';
import HangoutPage from './components/hangout/Hangout';
import Donate from './components/fundraisers/Donate';
// import Room from './components/hangout/Room';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<HomePage/>} />
        <Route path="/events" caseSensitive={false} element={<Events/>} />
        <Route path="/events/create" caseSensitive={false} element={<CreateEvent/>} />
        <Route path="/news" caseSensitive={false} element={<NewsContainer/>} />
        <Route path="/fundraisers" caseSensitive={false} element={<Fundraisers/>} />
        <Route path="/fundraisers/create" caseSensitive={false} element={<CreateFundraiser/>} />
        <Route path="/fundraisers/donate" caseSensitive={false} element={<Donate/>} />
        <Route path="/hangout" caseSensitive={false} element={<HangoutPage/>} />
        {/* <Route path="/hangout/room" caseSensitive={false} element={<Room/>} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
