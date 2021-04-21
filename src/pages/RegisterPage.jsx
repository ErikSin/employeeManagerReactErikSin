import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import firebaseApp from 'firebase/firebaseConfig';
import {useHistory} from 'react-router-dom'
import { UserContext } from 'App';


const RegisterPageStyles = styled.div ` 
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

const RegisterPage = (props) => {
    let history = useHistory();

    const refKeys ={
        username:'userName',
        email:'email',
        password:'password'
    }
    
    const [user, setUser] = useState({username:"", password:"", email:""})
    const [error, setError] = useState("")

    function handleRegister()
    {
        let errors ="";
        let valid=true
        let validPass = new RegExp("^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$")
        const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if(!user.username.trim())
        {
            errors = errors + "User Name Required. "
            valid=false;
        }

        if(!validPass.test(user.password))
        {
            errors = errors + "Password must contain a both casing and special characters. "
            valid=false;
        }

        if(!validEmail.test(user.email))
        {
            errors = errors + "Invalid Email. "
            valid=false;
        }

        if(!valid)
        {
            setError(errors)
            return
        }

        firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password).then(newUser=>
        {
            setError("User Successfully Created")
            setTimeout(history.push("/login"),2500)
            
        })
    }

    function setUserInput(stringVal, typeOfInput)
    {
        if(typeOfInput === "username")
        {
            setUser({...user, username:stringVal})
            return
        }
        
        if(typeOfInput === "email")
        {
            setUser({...user, email:stringVal})
            return
        }

        if(typeOfInput === "password")
        {
            setUser({...user, password:stringVal})
            return
        }
    }

    return (
         <RegisterPageStyles>
             
             <header>
                 <h1>Unlimited Trial Account</h1>
                  <p>no credit card required</p>
             </header>
            <div style={{display:'flex', flexDirection:"column", fontSize:18}}>
                <input style={{fontSize:25, marginTop:15, marginBottom:5}} type="text" value={user.username} onChange={(e)=>{setUserInput(e.target.value, "username")}} />
                <label>Username</label>
                <input style={{fontSize:25, marginTop:15, marginBottom:5}} type="email" value={user.email} onChange={(e)=>{setUserInput(e.target.value, "email")}} />
                <label>Email</label>
                <input style={{fontSize:25, marginTop:15, marginBottom:5}} type="password" value={user.password} onChange={(e)=>{setUserInput(e.target.value, "password")}} />
                <label>Password</label>
            </div>
            <p>{error}</p>

            
          <Button onClick={handleRegister} label="create a new account" uiStyle="login"/>

         </RegisterPageStyles>

    );
}
 
export default RegisterPage;
 
