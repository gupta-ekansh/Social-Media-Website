import { useState } from 'react';
import styles from '../styles/login.module.css';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks';
import { login } from '../api';

const Login = ()=>{
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [loggingIn , setLogginIn] = useState(false);

    const auth = useAuth();
    console.log(auth);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLogginIn(true);
        if(!email || !password) {
            return(
                toast.error('incorrect email or password' , {
                duration: 4000,
                position: 'top-right'
                })
            );
        }
        const response = await auth.login(email , password);
        if(response.success){        
            toast.success('Successfully Logged In' , {
                    duration: 4000,
                    position: 'rop-right'
            })
        }
        else {
            toast.error('User Not Found' , {
                    duration: 4000,
                    position: 'top-right'
            })
        }
        setLogginIn(false);
    }
    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>
        <div className={styles.field}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className={styles.field}>
            <input type="password" placeholder='Password' value={password} onChange = {(e)=>setPassword(e.target.value)} />
        </div>
        <div className={styles.field} >
            <button type="submit" disabled = {loggingIn}>
                {loggingIn ?  'Loggin In' : 'Log In'}
            </button>
        </div>
    </form>;
}

export default Login;

