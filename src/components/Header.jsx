import { Link } from "react-router-dom"
import { Home, HomeIcon } from "lucide-react"

const Header = () => {
    return (
        <header className="position-sticky top-0 start-0 end-0 px-4 ">

            <nav className="d-flex    justify-content-between items-center py-3 ">
                <div className="logo display-3"><img src="https://cdn.discordapp.com/attachments/1337074281976299592/1366424527709405264/BooRoad_2.png?ex=6810e582&is=680f9402&hm=9f21b6a4929b37f1db295d7e40619eaa5a9240aa30718410f23f8a81f4eaf81c&" alt="" className="" /></div>
                <div className="d-flex align-items-center   "><Link className="text-decoration-none text-primary h5 fw-semibold nav-link" to={'/'}> Home </Link></div>
                <Link to={'/login'}>Login</Link>


            </nav>
        </header>
    )
}

export default Header
