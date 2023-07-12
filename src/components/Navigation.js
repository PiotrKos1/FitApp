import { Outlet, Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div class="py-3 has-text-centered">
            <Link to="/info"><button class="button">Info</button></Link>
            <Link to="/calculator"><button class="button is-white">Calculator</button></Link>
            <Link to="/history"><button class="button is-white">History</button></Link>
            <Outlet />
            </div>
        </div>
    )}

export default Navigation;