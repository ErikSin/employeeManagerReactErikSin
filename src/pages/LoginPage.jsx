import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import firebaseApp from 'firebase/firebaseConfig';
import { UserContext } from 'App';
import { useHistory } from 'react-router';
// import firebase from '../firebase/firebaseConfig'

const LoginPageStyles = styled.div `  
max-width: 480px;
margin: 6rem auto 0;
header{
    text-align:center;
    margin-bottom: 2rem;
}
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    .jimo{
        background:grey;
    }
    button{
        margin-top:2rem;
    }

`
const LoginPage = (props) => {
    
    let history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loggedUser, setLoggedUser] = useContext(UserContext)

    function handleLogin()
    {
        firebaseApp.auth().signInWithEmailAndPassword(username, password).then(result =>
        {
            setLoggedUser({email:username, isLoggedIn:true})
            history.push("/dashboard")
        })
        .catch(err=>
        {
            setError(err.message)
            console.log(err.message)
        })
    }
    
    return ( 
        <LoginPageStyles>
            <header>
                <h1>Account Login</h1>
                <p>access your employee manager</p>
            </header>

            <div style={{display:'flex', flexDirection:"column", fontSize:18}}>
                <input style={{fontSize:25, marginTop:15, marginBottom:5}} type="email" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                <label>valid email address</label>
                <input style={{fontSize:25, marginTop:15, marginBottom:5}} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <label>Password</label>
            </div>
            <p>{error}</p>

          <Button onClick={handleLogin} label="login to your account" uiStyle="signup"/>

        </LoginPageStyles>

    );
}
 
export default LoginPage;