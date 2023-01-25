
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Resetpassword from './ForgetPassword';
import Home from './Home';
import Login from './Login';
import PrivateRoutes from './Privateroute';
import Register from './Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />}></Route>
      <Route  path="/register" element={<Register />}></Route>
      <Route  path="/forget" element={<Resetpassword />}></Route>

      <Route element={<PrivateRoutes />}>
      <Route  path="/home" element={<Home />}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
