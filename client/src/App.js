import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import User from './components/getUser/User';
import Update from './components/updateUser/update';
import Add from './components/addUser/Add';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
   <BrowserRouter>
   <Toaster position="top-center" reverseOrder={false} />
   <Routes>
    <Route path='/Add' element={<Add />} />
    <Route path='/update/:id' element={<Update />} />
    <Route path='/' element={<User />} />   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
