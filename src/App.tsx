import { contacts } from './constants';
import { Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import Contacts from './containers/Contacts/Contacts';
import AboutUs from './containers/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className='container p-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts contacts={contacts} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
