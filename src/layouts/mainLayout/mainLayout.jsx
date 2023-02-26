import React from 'react'

// material imports
import { Container, Box, Typography, Menu, MenuItem } from '@mui/material'

const MainLayout = (props) => {
  const { children, className } = props

  return (
    <Container maxWidth='lg' className={className} {...props}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', background: '#013D29', color: '#fff' }}>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', background: '#fff', color: '#000' }}>
        <Box>LOGO</Box>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
        <MenuItem>Search Input</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Cart</MenuItem>
      </Box>
      {children}
    </Container>
  )
}

export default MainLayout
