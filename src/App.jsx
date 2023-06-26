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
import { useSelector } from 'react-redux'
import NotFound from './components/notfound';
import ProtectedRoute from './components/protectedRouter';
import Phim from './components/home/page/phim';
import DetailFilm from './components/home/page/phim/detailPhim';
import HeaderFlex from './components/header/headerFlex';
import Rap from './components/home/page/rap';
import Uudai from './components/home/page/uu-dai';
import DetaiUudai from './components/home/page/uu-dai/detailUudai';
import MegaPlus from './components/home/page/mega-plus';
import LienHe from './components/home/page/lien-he';
import TuyenDung from './components/home/page/tuyen-dung';
import Faqs from './components/home/page/faqs';
import DichVu from './components/home/page/dich-vu';
import LichChieu from './components/home/page/lich-chieu';
import GioiThieu from './components/home/page/gioi-thieu';
import SuKien from './components/home/page/su-kien';
import { doRefreshFilm } from './redux/buy/buySlice';
import { doRefresh } from './redux/user/userSlice';
const Layout = () => {
  return (
    <>
      <Header />
      <HeaderFlex/>
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
    {
      path: 'phim',
      element: <Phim />
    },
    {
      path: 'phim/:slug',
      element: <DetailFilm />
    },
    {
      path: 'rap',
      element: <Rap />
    },
    {
      path: 'uu-dai',
      element:<Uudai/>
    },
    {
      path: 'uu-dai/:slug',
      element:<DetaiUudai/>
    },
    {
      path: 'lich-chieu',
      element:<LichChieu/>,
    },
    {
      path: 'dich-vu',
      element:<DichVu/>,
    },
    {
      path: 'faqs',
      element:<Faqs/>,
    },
    {
      path: 'tuyen-dung',
      element:<TuyenDung/>,
    },
    {
      path: 'lien-he',
      element:<LienHe/>,
    },
    {
      path: 'megaPlus',
      element:<MegaPlus/>,
    },
    {
      path: 'gioi-thieu',
      element:<GioiThieu/>,
    },
    {
      path: 'su-kien',
      element:<SuKien/>,
    },
    {
      path: 'booking/:slug',
      element:<SuKien/>,
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
      path: 'dasboard',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path: 'users',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path: 'films',
      element:
        <ProtectedRoute>
          <HomeAdmin />
        </ProtectedRoute>
    },
    {
      path: 'order',
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
  const dispatch = useDispatch();
  const film = useSelector(state => state.saveFilm.film)
  const getAccount = () => {
    dispatch(doRefreshFilm(film))
    if (window.location.pathname === '/login') return;
    else {
      dispatch(doRefresh(saveaccount))
    }
  }
  useEffect(() => {
    getAccount()
  },[])
  return (
    <div className='body'>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
