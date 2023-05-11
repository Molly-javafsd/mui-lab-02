import React from 'react'
import {Typography, Container, Box} from '@mui/material'
export default function Footer() {
  return (
    <>
      <footer>
        <br/><br/>
        <Box bgcolor='green' py={3} color='white'>
            <Container maxWidth='md'>
                <Typography variant='body2' align='center'>
                    Follow us on social media:
                    <br/><br/>
                    <Typography variant='body2' color='white'>Facebook | Instagram | Twitter | Youtube | </Typography>
                </Typography><br />
                <Typography variant='body2' align='center'>
                    Address: 123 Main St, City, State, ZIP
                </Typography>
            </Container>
        </Box>
      </footer>
    </>
  )
}
