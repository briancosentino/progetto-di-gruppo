import { Link } from "react-router-dom"
import { Home, HomeIcon } from "lucide-react"

const Header = () => {
    return (
        <header className="position-sticky top-0 start-0 end-0 z-1 bg-white  ">

            <nav className="d-flex    justify-content-between items-center py-3 ">
                <div className="logo display-3">LOGO</div>
                <div className="d-flex align-items-center   "><Link className="text-decoration-none text-black fw-semibold" to={'/'}> Home </Link></div>


            </nav>
        </header>
    )
}

export default Header
