import React from 'react';
import styled from 'styled-components'
import Logo from './../components/icons/Logo'
 

const HomePageStyles = styled.div `  
max-width: 480px;
margin: 8rem auto 0;
text-align:center;
header{
    margin-bottom: 2rem;
}
    h1{
        font-size: 3rem;
        font-weight:600;
    }
    p{
        font-size: 1.125rem;
        color:#7c7b8a;
        width: 60%;
        margin: 1rem auto 0;
    }
   
    svg{
        width: 80px;
    }
    a{
        display:block;
    }
`
const HomePage = (props) => {
    return ( 
            <HomePageStyles>
                <Logo/>
                <header>
                    <h1>Employee manager</h1>
                    <p>we focus on the paperwork while you foucs on your employees</p>
                </header>
             </HomePageStyles>
    );
}
 
export default HomePage;