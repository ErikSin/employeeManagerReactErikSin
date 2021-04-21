import { UserContext } from 'App'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    divContainer: {
        width:"90%", 
        display:'flex', 
        justifyContent:'center',

    },
    item:{
        padding:15,
        margin:15
    }
    
  });


function Dashboard()
{
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [dashboardObjects, setDashboardObjects] = useState(["addEmployee"])

    const [email, setEmail] = useState("")
    const [name, setName]= useState("")

    const classes = useStyles();

    function setOpenTab(tab)
    {
        dashboardObjects.unshift(tab)
        setDashboardObjects(dashboardObjects)

    }
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
                <Button onClick={()=>{setOpenSidebar(!openSidebar)}}>Open Drawer</Button>
                <Drawer style={{padding:16}} anchor='left' open={openSidebar} onClose={()=>{setOpenSidebar(false)}} >
                    <List style={{padding:16}}>
                        <ListItem onClick={()=>{setOpenTab('addEmployee')}}>
                            <ListItemIcon>
                                <GroupAddIcon/>
                            </ListItemIcon>
                            Add User
                        </ListItem>
                        
                    </List>
                </Drawer>

                {dashboardObjects[0] === "addEmployee" &&
                    <div className={classes.divContainer}>
                        <Card className={classes.item}>
                            <List>
                                <ListItem>
                                    <TextField value={name} onChange={(e)=>{setName(e.target.value)}} label="Name" variant="outlined" />
                                </ListItem>
                                <ListItem>
                                    <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} label="Email" variant="outlined" />
                                </ListItem>
                            </List>
                            <Button>Save</Button>
                        </Card>

                        <Card className={classes.item}>
                            { 
                                <List>
                                    <ListItem>
                                        <TextField value={name} onChange={(e)=>{setName(e.target.value)}} label="Name" variant="outlined" />
                                    </ListItem>
                                    <ListItem>
                                        <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} label="Email" variant="outlined" />
                                    </ListItem>
                                </List>
                            }
                            
                        </Card>


                    </div>
                
                }
            </div>
        )
    }


   
}

export default Dashboard