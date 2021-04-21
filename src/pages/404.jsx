import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return ( <header>
        <h1>404 Page Not Found</h1>
        <Link to='/login'>To Login</Link>
        </header> 
    );
}
 
export default PageNotFound;