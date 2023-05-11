import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'

export default function Navbar() {
  return (
   <>
   <AppBar position="static">
<Toolbar>

    <Typography variant='h6' component='div' sx={{ flexGrow:1}}>
        ABC Restaurant
    </Typography>
    <Button color='inherit'>Menu</Button>
    <Button color='inherit'>Reservations</Button>
    <Button color='inherit'>Contact</Button>
</Toolbar>

   </AppBar>
   </>
  )
}
