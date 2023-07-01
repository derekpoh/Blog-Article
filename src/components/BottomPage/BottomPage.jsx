import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
      minHeight: 300,
      maxWidth: 1000,
    },
  }));


const BottomPage = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "pink" }}>
        <StyledToolbar>
            <div
            style={{
                display:'flex',
                justifyContent:'space-between',
                width: '400px'
            }}
            >

            <div
            style={{
                display:'flex',
                flexDirection:'column',
            }}
            >
                <div 
                style={{ 
                    display: 'flex', 
                    flexDirection:'column',  
                    alignItems: 'center' }}>
                    <LocalPhoneTwoToneIcon sx={{ fontSize: 40 }} />
                    <Typography 
                    variant="h6" 
                    noWrap>
                        (+65) 6543 9876
                        </Typography>
                        </div>

                <div
                style={{ 
                    display: 'flex', 
                    flexDirection:'column',  
                    alignItems: 'center' }}>
                    <NotificationsActiveTwoToneIcon sx={{ fontSize: 40 }} />
                    <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        alignSelf: 'center',
                    }}
                >
                    Subscribe for more related <br/> news and information
                </Typography>
                </div>
                </div>

                    
            <div
            style={{
                display:'flex',
                flexDirection:'column',
            }}
            > 
            <div
            style={{ 
                display: 'flex', 
                flexDirection:'column',  
                alignItems: 'center' }}>
                <EmailTwoToneIcon sx={{ fontSize: 40 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                
                }}
            >
                Email Us
            </Typography>
            </div>

                <div
                style={{ 
                    display: 'flex', 
                    flexDirection:'column',  
                    alignItems: 'center' }}>
                    <LocationOnTwoToneIcon sx={{ fontSize: 40 }} />
                    <Typography
                    variant="h6"
                    noWrap
                    sx={{
                    
                    }}
                >
                    Our Location
                </Typography>
                </div>
                </div>
            
            </div>

        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default BottomPage
