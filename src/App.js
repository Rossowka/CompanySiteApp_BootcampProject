import './reset.css';
import './App.css';

import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import Main from './Components/Main'
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <LandingPage />
      <Main />
      <Footer />
    </>
  );
}

export default App;
