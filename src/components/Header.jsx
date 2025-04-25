import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const goHome = () => {
    navigate('/');
  };

  return (
    <AppBar 
      position="static" 
      elevation={4} 
      sx={{ bgcolor: '#424242' }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={goHome} startIcon={<HomeIcon />}>
            <Typography variant="h6" component="div">
              Suite de Aplicaciones
            </Typography>
          </Button>
        </Box>
        {location.pathname !== '/' && (
          <Button color="inherit" onClick={goHome}>
            Volver al Inicio
          </Button>
        )}
        <Box sx={{ ml: 2 }}>
          <img 
            src="/icons/maflow-automotive-spain-logo.png" 
            alt="Maflow Automotive Spain Logo" 
            height="60" 
            style={{ display: 'block' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;