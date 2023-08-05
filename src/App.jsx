import { useState } from 'react';
import { LoginContext } from './Components/Context/LoginContext';
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  const [login, setLogin] = useState(false)
  return (
    <>
      <LoginContext.Provider value={{ login, setLogin }}>
        <Navbar />
        <Outlet />
      </LoginContext.Provider>
    </>
  )
}

export default App
