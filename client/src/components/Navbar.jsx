import {Link} from "react-router-dom";

function Navbar(){
    return(
        <header className="navbar">
            <div>
                <Link>
                Seatbook
                
                </Link>

                <nav className="nav-links">
                    <Link to = "/">Evnets</Link>
                    <Link to = "/my-bookings">My Bookings</Link>
                     <Link to = "/admin/events">My Bookings</Link>
                </nav>
                <div className="user-area">
                    <div className="avatar">
                        JD
                    </div>
                    <span>
                        john Doe
                    </span>
                </div>
            </div>

        </header>
    );
}

export default Navbar;