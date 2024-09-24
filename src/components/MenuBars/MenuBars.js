import { Route, NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./MenuBars.scss";
const MenuBars = () => {
    return (

        <Route>
            <ul className="nav__wrapper">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="mycv">MyCV</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
        </Route>


    )
}

export default MenuBars; 