import './App.css';
import { Route, Routes } from 'react-router-dom';
import ServicesContainer from './components/services/ServicesContainer'
import NewService from './components/NewService/NewService';
import NavBar from './components/navbar/NavBar';
// import PageNotFound from './common/Notfound/PageNotFound';
import Home from './pages/Home';
import Users from './components/users/Users';
import Contact from './pages/Contact';
import About from './pages/About';
import NewUser from './components/users/NewUser';
import Footer from './common/footer/Footer';

function App({handleAddService}) {
  return (
    <div className="App">
      <NavBar/>
      <NewUser/>
      
      {/* <PageNotFound/> */}
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      <Route path="/services" element={<ServicesContainer/>}>
      <Route path="/services/new-service" element={<NewService onAddService={handleAddService}/>}/>
      </Route>
      <Route path={"/contact"} element={<Contact/>}/>
      <Route path={"/about"} element={<About/>}/>
      <Route path='/users' element={<Users/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
