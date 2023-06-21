import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import HomeAdmin from './components/admin/home';
import HeaderAM from './components/admin/header/HeaderAdmin';
import Login from './components/login';
import Register from './components/register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { doRefresh } from './redux/user/userSlice';
import { useSelector } from 'react-redux'
import NotFound from './components/notfound';
import ProtectedRoute from './components/protectedRouter';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const LayoutAM = () => {
  return (
    <>
      <HeaderAM />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [{
      index: true,
      element: <Home />
    },
    ]
  },
  {
    path: "/admin",
    element:
      <ProtectedRoute>
        <LayoutAM />
      </ProtectedRoute>
    ,
    errorElement: <NotFound />,
    children: [{
      index: true,
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path:'dasboard',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path:'users',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path:'films',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path:'order',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
]);


function App() {
  const saveaccount = useSelector(state => state.auth);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const getAccount = () => {
    if (window.location.pathname === '/login') return;
    else {
      dispatch(doRefresh(saveaccount))
    }
  }
  useEffect(() => {
    getAccount()
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
