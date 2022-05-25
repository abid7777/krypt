import { h } from 'preact';
import Router from 'preact-router';

import CurrencyDetail from './pages/CurrencyDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import News from './pages/News';

const App = () => (
  <div className="container mx-auto">
    <Navbar />
    <main>
      <Router>
        <CurrencyDetail path="/currency/:id" />
        <Home path="/" />
        <News path="/news" />
      </Router>
    </main>
  </div>
);

export default App;
