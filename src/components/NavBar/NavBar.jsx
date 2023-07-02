import * as React from 'react';
import { Link } from 'react-router-dom';
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
  alignItems: 'flex-start center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 80,
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menopauseAnchorEl, setMenopauseAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const tinyScreen = useMediaQuery("(max-width:960px)");
  const smallScreen = useMediaQuery("(max-width:1360px)");
  const intermediateScreen = useMediaQuery("(max-width:1700px)");
  const mediumScreen = useMediaQuery("(max-width:1960px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenopauseMenuOpen = (event) => {
    setMenopauseAnchorEl(event.currentTarget);
  };

  const handleMenopauseMenuClose = () => {
    setMenopauseAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FB6B90" }}>
        <StyledToolbar>

          {!tinyScreen ? null :
          <>
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
                marginTop: "5px"
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
            <MenuItem 
              onMouseEnter={handleMenopauseMenuOpen}
              onMouseLeave={handleMenopauseMenuClose}
            >
              <Typography variant="h6">
              <Link to={"/what-is-menopause"} style={{textDecoration:'none'}}>
                Menopause
                </Link>
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">Blog</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6">Contact Us</Typography>
            </MenuItem>
          </Menu>
          </>
          }
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/logo.JPG"
              alt="Menopause Blog"
              style={{
                marginTop: "10px",
                marginLeft: isMobile ? "5vw" : smallScreen ? "22vw" : intermediateScreen ? "20vw" : mediumScreen ? "23vw" : "25vw",
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
          

          {tinyScreen ? null : 
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginLeft: smallScreen ? "5vw" : "15vw",
                alignSelf: 'center',
                display: { xs: 'none', sm: 'block' }, 
                fontSize: smallScreen ? "16px" : "20px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontSize: smallScreen ? "16px" : "20px",
                }}
              >
                About
              </Typography>
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginLeft: "1vw",
                alignSelf: 'center',
                display: { xs: 'none', sm: 'block' }, 
                fontSize: smallScreen ? "16px" : "20px",
              }}
              onMouseEnter={handleMenopauseMenuOpen}
              onMouseLeave={handleMenopauseMenuClose}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontSize: smallScreen ? "16px" : "20px",
                }}
              >
                Menopause
              </Typography>   
              <Menu
                anchorEl={menopauseAnchorEl}
                open={Boolean(menopauseAnchorEl)}
                onClose={handleMenopauseMenuClose}
                MenuListProps={{ onMouseLeave: handleMenopauseMenuClose }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="h6">
                    <Link 
                    to={"/what-is-menopause"}
                    style={{textDecoration:'none'}}>
                    What is Menopause?
                    </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="h6">
                  <Link 
                  to={"/what-is-menopause/perimenopause"} 
                  style={{textDecoration:'none'}}>
                    Perimenopause
                    </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="h6">
                  <Link 
                  to={"/what-is-menopause/menopause"}
                  style={{textDecoration:'none'}}>
                    Menopause
                    </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography variant="h6">
                  <Link 
                  to={"/what-is-menopause/postmenopause"}
                  style={{textDecoration:'none'}}>
                    PostMenopause
                    </Link>
                    </Typography>
                </MenuItem>
              </Menu>
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginLeft: "1vw",
                alignSelf: 'center',
                display: { xs: 'none', sm: 'block' }, 
                fontSize: smallScreen ? "16px" : "20px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontSize: smallScreen ? "16px" : "20px",
                }}
              >
                Blog
              </Typography>
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginLeft: "1vw",
                alignSelf: 'center',
                display: { xs: 'none', sm: 'block' }, 
                fontSize: smallScreen ? "16px" : "20px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  alignSelf: 'center',
                  flexGrow: 1, 
                  display: { xs: 'none', sm: 'block' }, 
                  fontSize: smallScreen ? "16px" : "20px",
                }}
              >
                Contact Us
              </Typography>
            </IconButton>
          </>
          }
          </div>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;



