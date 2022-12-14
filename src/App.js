import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectiveRoute from "./components/ProtectiveRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectiveRoute><Account /></ProtectiveRoute>} />
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
