import { UserContext } from 'App'
import React, { useContext } from 'react'
import { Redirect } from 'react-router'

function Dashboard()
{
    const [loggedUser, setLoggedUser] = useContext(UserContext)

    if(!loggedUser.email || !loggedUser.isLoggedIn)
    {
        return(
            <Redirect to="/login"/>
        )
    }
    else
    {
        return(
            <div>
                Welcome {loggedUser.email}
            </div>
        )
    }


   
}

export default Dashboard