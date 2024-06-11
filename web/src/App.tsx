import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from "react"
import { jwtDecode } from 'jwt-decode'
import Main from './components/main/Main.tsx'
import Autorisation from './components/entrance/Autorisation.tsx'
import Registration from './components/entrance/Registration.tsx'
import Change_password from './components/entrance/Cange_password.tsx'
import Forgot_password from './components/entrance/Forgot_password.tsx'
import Profile from './components/profile/Profile.tsx'
import Timetable from './components/profile/Timetable.tsx'
import './App.css'

/* App компонент отвечающий за сборку приложения */

/* Определение области значений */
interface Token {
  access_token: string
}

interface ServerData {
}

function App() {
  /* Константа состояния авторизации пользователя */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Константа ошибки авторизации */
  const [displayError, setDisplayError] = useState('');

  /* Константа состояния токена */
  const [token, setToken] = useState<Token | any>();

  /* Константа состояния данных полученных с сервера */
  const [serverData, setServerData] = useState<ServerData | any>();

  /* Константа состояния меню в профиле */
  const [isOpen, setOpen] = useState(false);

  /* Функция Login */
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  /* Функция Logout */
  const handleLogout = () => {
    setIsLoggedIn(false);
    token.access_token = null;
    setOpen(false);
    console.log(token) /* Trash */
  };
  
  /* Проверка работы с токеном */
  if (token && token.access_token != null) {
    let a = jwtDecode(token.access_token); /* Trash */
    console.log(a.exp); /* Trash */
    console.log(a); /* Trash */
  }


  console.log('login ' + isLoggedIn);
  
  /* Если пользователь не авторизован, редирект на страницу авторизации */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Main />} />
        <Route path="/autorisation" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Autorisation handleLogin={handleLogin} setDisplayError={setDisplayError} displayError={displayError} setToken={setToken} />} />
        <Route path="/registration" element={isLoggedIn ? <Navigate replace to="/profile" /> :<Registration setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/forgot_password" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Forgot_password setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/change_password" element={<Change_password setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile handleLogout={handleLogout} token={token.access_token} isOpen={isOpen} setOpen={setOpen} serverData={serverData} setServerData={setServerData} /> : <Navigate replace to="/autorisation" />} />
        <Route path="/profile/timetable" element={isLoggedIn ? <Timetable handleLogout={handleLogout} token={token.access_token} isOpen={isOpen} setOpen={setOpen} serverData={serverData} setServerData={setServerData} /> : <Navigate replace to="/autorisation" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
