import { Main,Container } from './components/Globalstyles';
import Navbar from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Feature from './pages/feature/Feature';
import Generous from './pages/generous/Generous';
import Global from './pages/global/Global';
import Home from './pages/home/Home';
import HoweWork from './pages/howWeWork/HoweWork';
import Humanity from './pages/humanity/Humanity';
import Milestone from './pages/milestone/Milestone';
import Savarjishod from './components/Savarjishod';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <Feature/>
     <Milestone/>
     <HoweWork/>
     <Humanity/>
     <Generous/>
     <Global/>
     <Footer/>
   
    </div>
  );
}

export default App;
