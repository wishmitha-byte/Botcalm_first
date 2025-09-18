import Header from './components/Header';
import Mainsection from './components/Mainsection';
import Features from './components/Features';
import Titles from './components/Titles';
import Notify from './components/Notify';
import Cards from './components/Cards';
import Work from './components/Work';
import Subs from './components/Subs';
import Footer from './components/Footer';
// import ScreenSizeIndicator from './components/ScreenSizeIndicator';

const App = () => {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Main Sections */}
      <Mainsection />
      <Features />
      <Titles />
      <Notify />
      <Cards />
      <Work />
      <Subs />

      {/* Footer */}
      <Footer />

      {/* Debugging Tool (optional) */}
      {/* <ScreenSizeIndicator /> */}
    </>
  );
};

export default App;
