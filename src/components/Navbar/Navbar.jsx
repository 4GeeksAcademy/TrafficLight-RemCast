import { Link } from "react-router-dom";
import starWarsLogo from "../../img/pngwing.com.png";
import Dropdown from "./components/Dropdown";
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (

        <nav className="navbar navbar-light bg-tertiary mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className={classes.SWLogo} src={starWarsLogo} alt="SW Logo"/>
                </Link>
                <Dropdown/>
            </div>
         </nav>
      );

}
export default Navbar