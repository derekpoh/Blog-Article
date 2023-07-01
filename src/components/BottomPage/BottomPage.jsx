import * as React from 'react';
import { useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
      minHeight: 300,
      maxWidth: 5000,
      overflowX: 'hidden',
    },
  }));


const BottomPage = () => {
const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "pink" }}>
        <StyledToolbar>
            <div
            style={{
                display:'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

            <div
            style={{
                display:'flex',
                justifyContent:'space-between',
                width: '800px',
                flexDirection: isMobile ? "column" : "",
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
                    <LocalPhoneTwoToneIcon 
                    sx={{ fontSize: 40,
                        paddingTop: isMobile ? '15px' : "", 
                        }} />
                    <Typography 
                    style={{
                        fontSize: '18px',
                        color: '#525252'
                      }}
                    >
                        (+65) 6543 9876
                        </Typography>
                        </div>

                <div
                style={{ 
                    display: 'flex', 
                    flexDirection:'column',  
                    alignItems: 'center' }}>
                    <NotificationsActiveTwoToneIcon 
                    sx={{ 
                        fontSize: 40, 
                        paddingTop: '15px', 
                        }} />
                    <Typography
                    style={{
                        fontSize: '18px',
                        color: '#525252'
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
                <EmailTwoToneIcon 
                sx={{ fontSize: 40, 
                paddingTop: isMobile ? '15px' : "", 
                }} />
            <Typography
                style={{
                    fontSize: '18px',
                    color: '#525252'
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
                    <LocationOnTwoToneIcon 
                    sx={{ 
                        fontSize: 40, 
                        paddingTop: '15px', 
                        }} />
                    <Typography
                    style={{
                        fontSize: '18px',
                        color: '#525252'
                      }}
                    >
                    Our Location
                </Typography>
                </div>
                </div>
                
                <div
                style={{ 
                display: 'flex', 
                flexDirection:'column',  
                alignItems: 'center',
                paddingTop: isMobile ? '15px' : "", }}>
                <div>
                <InstagramIcon sx={{ fontSize: 30 }}/>
                <FacebookIcon sx={{ fontSize: 30, paddingLeft:'10px' }}/>
                <TwitterIcon sx={{ fontSize: 30, paddingLeft:'10px' }}/>
                <YouTubeIcon sx={{ fontSize: 30, paddingLeft:'10px' }}/>
                </div>

                <div
                style={{
                    color: '#525252'
                  }}>
                    <p>Privacy Notice</p>
                    <p>Terms of Use</p>
                    <p>Site Map</p>
                </div>
                </div>
                
            </div>
        
            <div
            style={{
                paddingTop: '10px',
                color: '#525252'
            }}>
                <p>
                © 2023 HEALTHYWOMEN, Inc. All Right Reserved | {isMobile ? <br/> : null} Privacy Policy
                </p>
            </div>

            </div>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default BottomPage
