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
          <Route path="/diamondexchange" element={<BetHome />} />
          <Route path="/diamondexchange/PSL" element={<BetHome />} />
          <Route path="/diamondexchange/WPL" element={<BetHome />} />
          <Route path="/diamondexchange/IPL" element={<BetHome />} />
          <Route path="/diamondexchange/CRICKET" element={<CricketContainer />} />
          <Route path="/diamondexchange/TENNIS" element={<TennisContainer />} />
          <Route path="/diamondexchange/KABADDI" element={<KabaddiContainer />} />
          <Route path="/diamondexchange/FOOTBALL" element={<FootballContainer />} />
          <Route path="/diamondexchange/live-teen-patti" element={<TeenPattiContainer />} />
          <Route path="/diamondexchange/live-poker" element={<LivePokerContainer />} />
          <Route path="/diamondexchange/lucky-7" element={<Lucky7Container />} />


          <Route path="/diamondexchange/PSL" element={<BetPage />} />
          <Route path="/diamondexchange/WPL/bet" element={<BetPage />} />
          <Route path="/diamondexchange/IPL/bet" element={<BetPage />} />
          <Route path="/diamondexchange/CRICKET/bet" element={<BetPage />} />
          <Route path="/diamondexchange/TENNIS/bet" element={<BetPage />} />
          <Route path="/diamondexchange/KABADDI/bet" element={<BetPage />} />
          <Route path="/diamondexchange/FOOTBALL/bet" element={<BetPage />} />
          <Route path="/diamondexchange/live-teen-patti/bet" element={<BetPage />} />
          <Route path="/diamondexchange/live-poker/bet" element={<BetPage />} />
          <Route path="/diamondexchange/lucky-7/bet" element={<BetPage />} />

          {/* <Route path='/diamondexchange/bet' element={<BetPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </>
  );
}

export default App;
