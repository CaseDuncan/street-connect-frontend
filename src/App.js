import './App.css';
import { Route, Routes } from 'react-router-dom';
import ServicesContainer from './components/services/ServicesContainer'
import NewService from './components/NewService/NewService';
import NavBar from './components/navbar/NavBar';
import PageNotFound from './common/Notfound/PageNotFound';
import Home from './pages/Home';
import Users from './components/users/Users';
import NewUser from './components/users/NewUser';


function App({handleAddService}) {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      <Route path="/services" element={<ServicesContainer/>}/>
      <Route path="/services/add_service" element={<NewService onAddService={handleAddService}/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/add_user' element={<NewUser/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
