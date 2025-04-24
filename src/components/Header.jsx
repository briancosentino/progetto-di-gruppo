import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>

            <nav className="d-flex justify-around py-3 ">
                <div className="logo display-3">LOGO</div>
                <div>{/* <Link to={'/'}>Home</Link> */}</div>


            </nav>
        </header>
    )
}

export default Header
