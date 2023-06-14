import { Link, NavLink, Prompt } from "react-router-dom";

//import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                        {/* <li>
                            <NavLink exact activeStyle={{color : 'red'}} to="/Home">Home 1</NavLink>
                        </li>

                        <li>
                            <NavLink exact activeClassName="myStyle" to="/Product">Product 1</NavLink>
                        </li>
                        <li>
                        <Prompt when={true}// true hoặc false hoặc biến boolean
    message={ (location) => (`Bạn có chắc muốn đi tới ${location.pathname}`) }></Prompt>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;