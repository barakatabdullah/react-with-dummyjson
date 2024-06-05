
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AuthGuard from './root/auth/_guard/AuthGuard'

export default function Layout() {


  return (
    <AuthGuard>
            <>
      <NavBar/>
      <Outlet/>
    </>
    </AuthGuard>

  )
}

