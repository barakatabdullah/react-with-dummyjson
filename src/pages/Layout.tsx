
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AuthGuard from './root/auth/_guard/AuthGuard'
import SideBar from '../components/SideBar'

export default function Layout() {


  return (
    <AuthGuard>
      <div className='w-screen min-h-screen flex'>
        <SideBar />
        <Outlet />
      </div>
    </AuthGuard>

  )
}

