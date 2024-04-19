import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Tourist from './Pages/Tourist';
import AutoTaxi from './Pages/AutoTaxi';
import PanchayathMedia from './Pages/PanchayathMedia';
import Restaurant from './Pages/Restaurant';
import Schools from './Pages/Schools';
import Hospitals from './Pages/Hospitals';
import AnnouncementSection from './Pages/AnnouncementSection';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div >
    
      
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/tourist' element={<Tourist/>}/>
<Route path='/autotaxi' element={<AutoTaxi/>}/>
<Route path='/media' element={<PanchayathMedia/>}/>
<Route path='/restaurant' element={<Restaurant/>}/>
<Route path='/schools' element={<Schools/>}/>
<Route path='/hospital' element={<Hospitals/>}/>
<Route path='/annoucement' element={<AnnouncementSection/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>



      </Routes>
     
    </div>
  );
}

export default App;
