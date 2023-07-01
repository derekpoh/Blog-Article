import * as React from 'react';
import { useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 80,
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const tinyScreen = useMediaQuery("(max-width:960px)");
  const smallScreen = useMediaQuery("(max-width:1260px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FB6B90" }}>
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen} 
          >
            <MenuIcon 
              fontSize='large'
              style={{
                marginTop: isMobile ? "30px" : "18px"
              }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">About</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">Menopause</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">Blog</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">Contact Us</Typography>
            </MenuItem>
          </Menu>
              
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/logo.JPG"
              alt="Home Page"
              style={{
                marginTop: "10px",
                marginLeft: isMobile ? "5vw" : "23vw",
                width: "70px",
                height: "70px",
                borderRadius: '50%',
                flexShrink: 0, 
                transition: 'width 0.3s', 
                '@media (maxWidth: 600px)': { 
                  width: '40px',
                  height: '40px',
                  marginLeft: '10px',
                },
              }}
            />
            <p
              style={{
                marginTop: "35px",
                marginLeft: "5px",
                transition: 'width 0.3s', 
                fontSize: isMobile ? "13px" : "16px" ,
                '@media (maxWidth: 600px)': { 
                  width: '40px',
                  height: '40px',
                  marginLeft: '10px',
                },
              }} 
            >
              HEALTHYWOMEN <br/>
              WOMEN'S HEALTH BLOG 
            </p>
          </div>

          {tinyScreen ? null : 
          <>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              marginLeft: smallScreen ? "10vw" : "15vw",
              alignSelf: 'center',
              flexGrow: 0.2, 
              display: { xs: 'none', sm: 'block' }, 
              fontSize: smallScreen ? "15px" : "20px",
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              alignSelf: 'center',
              flexGrow: 0.2, 
              display: { xs: 'none', sm: 'block' }, 
              fontSize: smallScreen ? "15px" : "20px",
            }}
          >
            Menopause
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              alignSelf: 'center',
              flexGrow: 0.2, 
              display: { xs: 'none', sm: 'block' }, 
              fontSize: smallScreen ? "15px" : "20px",
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              alignSelf: 'center',
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' }, 
              fontSize: smallScreen ? "15px" : "20px",
            }}
          >
            Contact Us
          </Typography>
          </>
          }
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

