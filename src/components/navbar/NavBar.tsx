import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Logo from "../Logo";

const NavBar = () => {
  return (
    <header>
      <div className={styles.container}>
        <Logo/>
        <nav >
          <ul className={styles.navbar}>
            <li>
              <Link to="/">About</Link>
             </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
             </li>

             <li>
               <button className={styles.btnPrimary}>Home</button>
             </li>  
          </ul>
        </nav>
      </div>
  </header>
  )
}

export default NavBar;
