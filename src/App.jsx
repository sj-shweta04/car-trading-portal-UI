import { useState } from 'react';
import { LoginContext } from './Components/Context/LoginContext';
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LoginContext.Provider value={{ login, setLogin, user, setUser, loading, setLoading}}>
        <Navbar />
        <Outlet />
      </LoginContext.Provider>
    </>
  )
}

export default App
