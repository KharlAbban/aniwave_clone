import { Footer, NavBar } from '../components'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout