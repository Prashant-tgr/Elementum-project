
import menuIcon from "../assets/icons/menu.svg";
function Navbar(){
    return (
        <header className="navbar">
          <div className="container">
            <div className="navbar_container">
              <div className="navbar_logo">
                  Elementum</div>

            <nav className="navbar_links">
                <a href="#">Home</a>
                <a href="#">Studio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">FAQs</a>
            </nav>

            <div className="navbar_menu">
                <img src={menuIcon} alt="Menu" />
            </div>
          
            </div>
            </div>
        </header>
    )
}

export default Navbar;