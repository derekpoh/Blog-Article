import * as React from 'react';
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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "pink" }}>
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
            marginTop: "15px"
            }}/>
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
          <img
            src="/logo.JPG"
            alt="Home Page"
            style={{
              marginTop: "10px",
              marginLeft: "23vw",
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              marginLeft: "15vw",
              alignSelf: 'center',
              flexGrow: 0.2, 
              display: { xs: 'none', sm: 'block' }, 
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
            }}
          >
            Contact Us
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
