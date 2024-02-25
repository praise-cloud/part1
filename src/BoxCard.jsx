
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BoxCard(){
    return(
        <Box  className='boxes' sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>

        {/* this is the menu bar */}
        <Grid item xs={2} md={2}>
          <Item>Menu box</Item>
        </Grid>
        {/* for informations and charts */}
        <Grid item xs={2} md={2}>
          <Item>first Account</Item>
        </Grid>

        <Grid item xs={2} md={2}>
          <Item>Second Account</Item>
        </Grid>

        <Grid item xs={2} md={2}>
          <Item>Thrid Account</Item>
        </Grid>

        <Grid item xs={2} md={2}>
          <Item>Fourth Account</Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default BoxCard;