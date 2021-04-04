import React from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
 
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
    return (
         <RegisterPageStyles>
             
             <header>
                 <h1>Unlimited Trial Account</h1>
                  <p>no credit card required</p>
             </header>


          <FormInput   inputType="text" label="name on the account" />
          <FormInput   inputType="email" label="valid email address"/>
          <FormInput   inputType="password" label="password (8 charachters)"/>
          <Button  label="create a new account" uiStyle="login"/>

         </RegisterPageStyles>

    );
}
 
export default RegisterPage;
 
