import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navleft"> Instagram </div>
        <div className="navcenter">
            <ul className="navlist">
                <li className="navlistall">HOME</li>
                <li className="navlistall">ABOUT</li>
                <li className="navlistall">CONTACT</li>
                <li className="navlistall">CREATE</li>
                <li className="navlistall">LOGOUT</li>
            </ul>
        </div>
        <div className="navright">
            <i className=" navsearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>

  )
}

export default NavBar