
import * as React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';

//header component
function  header(){

        const PinkSwitch = styled(Switch)(({ theme }) => ({'& .MuiSwitch-switchBase.Mui-checked': {
             color: pink[600],
                '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: pink[600],
            },
        }));

        const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return(
        <header>
            <nav>
                <div className="logo">
                    <h1>MONEY<span>-</span>HUB</h1>
                </div>
            
                <div className="title">
                    <h1>Analytics</h1>

                    {/* date function to change */}
                    <div className="titleDate">
                        <p className="date">01/06/2024 - 31/06/2024</p>
                        <CalendarMonthIcon sx = {{ fontSize : 12, fontWeight: 500, paddingLeft:2}}></CalendarMonthIcon>
                    </div>
                </div>

                <div className="themes">
                        <LightModeOutlinedIcon sx ={{ fontSize:15}}></LightModeOutlinedIcon>
                         <Switch {...label} defaultChecked size='small'/>
                        <DarkModeOutlinedIcon sx={{ fontSize:15}}></DarkModeOutlinedIcon>
                </div>

                {/* user profile */}
                <div className="userProfile">
                         <Avatar alt="Praise Georgewill" src="/components/avatar/1930478 pexels-gülşah-aydoğan-19501540.jpg" />
                         <p className='profileName'>Praise Georgewill</p>
                </div>
            </nav>
        </header>
    );
}

export default header;