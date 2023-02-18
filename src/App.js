import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss'
import { useContext } from 'react';
import { AuthContext } from './contex/authContex';

const App = () => {

  const {currentUser} = useContext(AuthContext);

  const Layout=()=>{
    return(
      <div >
        <NavBar/>
        <div style={{"display":"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  };

  const ProtectedRoute =({children})=>{
    if (!currentUser) {
     return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute> ,
      children:[
        {
          path: "/",
          element:  <Home/>
        },
        {
          path: "/profile/:id",
          element:  <Profile/>,
        },
      ]
    },
    {
      path: "/login",
      element:  <Login/>,
    },
    {
      path: "/register",
      element:  <Register/>,
    },
  ]);
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
