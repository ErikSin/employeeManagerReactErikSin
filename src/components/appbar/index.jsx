import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () =>
{
    return(
        <div style={styles.nav}>
            <Link style={styles.link} to='/'>Home</Link>
            <Link style={styles.link} to='/register'>Register</Link>
            <Link style={styles.link} to='/login'>Login</Link>
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

