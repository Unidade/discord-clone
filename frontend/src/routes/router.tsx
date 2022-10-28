import { createBrowserRouter } from 'react-router-dom'
import RootBoundary from '../errorBoundary/RootBoundary'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RootBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])
