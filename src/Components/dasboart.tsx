import Navbar from './Navbar'
import FooterPage from '../Pages/footer'
import { Outlet } from 'react-router-dom'

export default function Dasboart() {
  return (
    <div>
            <Navbar />
            <Outlet/>
           < FooterPage/>
    </div>
  )
}
