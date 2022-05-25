import { h } from 'preact';
import Router from 'preact-router';

import CurrencyDetail from './pages/CurrencyDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import News from './pages/News';

const App = () => (
  <div>
    <div className="shadow-md">
      <Navbar />
    </div>
    <main className="container px-2 mx-auto mt-8">
      <Router>
        <CurrencyDetail path="/currency/:id" />
        <Home path="/" />
        <News path="/news" />
      </Router>
    </main>
  </div>
);

export default App;
