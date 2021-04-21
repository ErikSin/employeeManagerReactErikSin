import { UserContext } from 'App'
import firebaseApp from 'firebase/firebaseConfig'
import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'

export const NavBar = () =>
{
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    let history = useHistory()
    function handleLogout()
    {
        firebaseApp.auth().signOut().then(()=>
        {
            setLoggedUser({email:"", isLoggedIn:false})
            history.push('/login')
        })
     
    }

    return(
        <div style={styles.nav}>
            <Link style={styles.link} to='/'>Home</Link>
            {!loggedUser.isLoggedIn &&
                <React.Fragment>
                    <Link style={styles.link} to='/register'>Register</Link>
                    <Link style={styles.link} to='/login'>Login</Link>
                </React.Fragment>  
            }
            {loggedUser.isLoggedIn &&
                <React.Fragment>
                    <Link style={styles.link} to='/dashboard'>My Dashboard</Link>
                    <p style={styles.link} onClick={handleLogout}>Logout</p>
                </React.Fragment>
            }
        </div>
    )
}

const styles = {
    nav:
    {
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        padding:10,
        backgroundColor:'#e4b7b7'
    },
    link:
    {
        textDecoration:'none',
        color:'#000',
        marginRight:15, 
        padding:15,
        border:'2px solid black'
    }
    
}

