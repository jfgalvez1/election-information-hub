import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { EHRoutes } from '../utils/routes';
import SchoolIcon from '@mui/icons-material/School';
import Face6Icon from '@mui/icons-material/Face6';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { usePathname, useRouter } from 'next/navigation';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const pathname = usePathname();
  const { push } = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuItems = [
    {
      label: EHRoutes.learn.name,
      link: EHRoutes.learn.path,
      icon: {
        mobile: <SchoolIcon />,
        desktop: <SchoolIcon className="size-5 text-brand-primary-400" />,
      },
    },
    {
      label: EHRoutes.candidates.name,
      link: EHRoutes.candidates.path,
      icon: {
        mobile: <Face6Icon />,
        desktop: <Face6Icon className="size-5 text-brand-primary-400" />,
      },
    },
    {
      label: EHRoutes.aboutus.name,
      link: EHRoutes.aboutus.path,
      icon: {
        mobile: <Diversity3Icon />,
        desktop: <Diversity3Icon className="size-5 text-brand-primary-400" />,
      },
    },
  ];

  return (
    <AppBar position="static">
      <div>
        <Toolbar>
          <Box className="flex flex-row items-center gap-3">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0 }} />
            <Typography
              onClick={() => push('/')}
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GABAY NI JUAN
            </Typography>
          </Box>

          {/* user menu */}
          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, pt: 0.5 }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* hamburger */}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  width: '100%',
                },
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  className={`h-12 flex w-full items-center gap-3 p-3 border-b-2 ${pathname === item.link ? 'border-brand-primary-600' : 'border-transparent hover:border-brand-primary-600'}`}
                  href={item.link}
                  passHref
                  onClick={handleCloseNavMenu}
                  data-testid={`nav-link-${item.label}`}
                >
                  {item.icon.desktop}
                  {item.label}
                </Link>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GABAY NI JUAN
          </Typography>
          {/* app menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                className="group relative flex items-center justify-center gap-2 focus-visible:outline-none px-4 text-white hover:text-gray-300"
                href={item.link}
                passHref
                data-testid={`nav-link-${item.label}`}
              >
                {item.icon.desktop}
                {item.label}
              </Link>
            ))}
          </Box>

          {/* When User is Loggedin */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                className="flex flex-row gap-3"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'poppins',
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  JUAN DELA CRUZ
                </Typography>
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
                  <Typography sx={{ textAlign: 'center' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <div className="hidden lg:flex items-center gap-2">
              <button
                className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full border border-gray-300 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={() => push(EHRoutes.login.path)}
              >
                Login
              </button>
              <button
                className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full border border-gray-300 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={() => push(EHRoutes.register.path)}
              >
                Register
              </button>
            </div>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default TopBar;
