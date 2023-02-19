import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
export default function MediaCard ({ title, description, thumbnail }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnail} {...{ title }} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='warning' variant='outlined'>
          <strong>Add to Cart</strong><AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
