import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { BetHome } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Home/Footer/Footer';
// import {BetHeader} from './components/Home/Header/BetHeader'


function App() {
  return (<>
    {/* <BetHeader /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BetHome />} />
        <Route path="/PSL" element={<BetHome />} />
        <Route path="/WPL" element={<BetHome />} />
        <Route path="/IPL" element={<BetHome />} />
        <Route path="/CRICKET" element={<BetHome />} />
        <Route path="/TENNIS" element={<BetHome />} />
        <Route path="/KABADDI" element={<BetHome />} />
        <Route path="/FOOTBALL" element={<BetHome />} />
        <Route path="/live-teen-patti" element={<BetHome />} />
        <Route path="/live-pocker" element={<BetHome />} />
        <Route path="/lucky-7" element={<BetHome />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
