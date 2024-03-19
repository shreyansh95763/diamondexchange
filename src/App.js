import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BetHome } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Home/Footer/Footer';
import { BetPage } from './components/Home/BettingPage';
import { TeenPattiContainer } from './components/Home/MainBody/TeenPattin/TeenPattiContainer';
import { LivePokerContainer } from './components/Home/LivePoker/LivePokerContainer';
import { Lucky7Container } from './components/Home/Lucky7/Lucky7Container';
import CricketContainer from './components/Home/Cricket/CricketContainer';
import { TennisContainer } from './components/Home/Tennis/TennisContainer';
import KabaddiContainer from './components/Home/Kabaddi/KabaddiContainer';
import FootballContainer from './components/Home/Football/FootballContainer';
// import {BetHeader} from './components/Home/Header/BetHeader'


function App() {
  return (<>
    {/* <BetHeader /> */}
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BetHome />} />
          <Route path="/PSL" element={<BetHome />} />
          <Route path="/WPL" element={<BetHome />} />
          <Route path="/IPL" element={<BetHome />} />
          <Route path="/CRICKET" element={<CricketContainer />} />
          <Route path="/TENNIS" element={<TennisContainer />} />
          <Route path="/KABADDI" element={<KabaddiContainer />} />
          <Route path="/FOOTBALL" element={<FootballContainer />} />
          <Route path="/live-teen-patti" element={<TeenPattiContainer />} />
          <Route path="/live-poker" element={<LivePokerContainer />} />
          <Route path="/lucky-7" element={<Lucky7Container />} />

          <Route path='/bet' element={<BetPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </>
  );
}

export default App;
