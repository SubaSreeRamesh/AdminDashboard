import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriangleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const TrophyImg=styled("img")({
    right:30,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achievement = () => {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
<Typography variant='h6' sx={{letterSpacing:".25px"}}>
    Shop with zosh
</Typography>
<Typography variant='body2'>Congratulations 🥳</Typography>
<Typography variant='h5'>420.8K</Typography>
<Button size='small' variant='contained'> View Sales</Button>
       <TriangleImg src=' '></TriangleImg>
       <TrophyImg src='https://shopwithzosh.vercel.app/images/misc/trophy.png' />
        </CardContent>
    </Card>
  )
}

export default Achievement