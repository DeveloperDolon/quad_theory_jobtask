import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import userImage from "../../assets/pngwing.com (3).png";
import logo from "../../assets/logo.png";
import { ArrowBackIos } from '@mui/icons-material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='md:pt-6 pt-3' position="static" sx={{
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "black"
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src={logo} className='md:block hidden' alt="" />

          
          <img src={logo} alt="" className='md:w-16 w-10 md:hidden block mr-5' />
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: {md: "20px", sm: "12px", xs: "5px"} }}>
            <Search sx={{display: "flex", alignItems: "center", margin: '0px', borderRadius: "8px"}}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#fea494" }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ fontWeight: "520", fontSize: {md:"16px", sm:"14px", xs: "12px"}, fontFamily: "Source Sans 3" }}
                placeholder="Search Audiobook"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <div>
              <Button
                className='hover:bg-[#fea494]'
                sx={{background:"white", color: "black", borderRadius: "8px", padding: {md: "10px 20px", sm: "8px 16px", xs: "5px 12px"}, fontWeight: "600", fontSize: {md: "16px", sm: "13px", xs: "12px"}, display: "flex", gap:{md:"20px", sm: "13px", xs: "7px"}}}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<ArrowBackIos style={{rotate: "270deg", marginBottom: "10px", color: "#fea494"}} />}
              >
                Menu
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  Home
                </MenuItem>
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  Details
                </MenuItem>
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  Category
                </MenuItem>
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  My Favorites
                </MenuItem>
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  Profile
                </MenuItem>
                <MenuItem className='hover:text-[#fea494]' onClick={handleClose} disableRipple>
                  Log in/Sign Up
                </MenuItem>
              </StyledMenu>
            </div>
          </Box>

          <Box className="md:block hidden" sx={{ flexGrow: 0 }}>
            <Tooltip sx={{display: {md:"block", sm:"none"}}} title="Open settings">
              <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                <Avatar className='bg-[#fd6011]' sx={{display: {md:"block", sm:"none"}}} alt="Remy Sharp" src={userImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;