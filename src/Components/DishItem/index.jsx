import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material'

export default function DishItem({imageUrl='default', dishName='default', dishDescription="default"}) {

  return (
    <>
      <Card>
        <CardMedia
        component='img'
        height='200'
        image={imageUrl}
        alt='food img1'
        />
        <CardContent>
            <Typography variant='h5' component='div'>
                {dishName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                {dishDescription}
            </Typography>
        </CardContent>
      </Card>
    </>
  )
}
