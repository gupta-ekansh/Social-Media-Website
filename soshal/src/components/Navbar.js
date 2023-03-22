import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <Link to ="/">
                    <img 
                        src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.user}>
                    <Link to =''>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                            alt="User Info" 
                            className={styles.userDp}
                        />    
                    </Link>
                    <span>Ekansh Gupta</span>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <Link to = '/login'>Log In</Link>
                        </li>
                        <li>
                            <Link to ='/logOut'>Log Out</Link>
                        </li>
                        <li>
                            <Link to ='/'>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;