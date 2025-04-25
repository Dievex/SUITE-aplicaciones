import { Card, CardContent, CardActionArea, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DepartmentFolder({ department }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${department.id}`);
  };

  return (
    <Card 
      sx={{ 
        width: 280, 
        height: 180,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: department.color,
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out'
        }
      }}
    >
      <CardActionArea 
        onClick={handleClick}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2 
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Box 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              borderRadius: '50%',
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto 16px auto'
            }}
          >
            <img 
              src={department.icon} 
              alt={`Icono de ${department.name}`} 
              style={{ width: 36, height: 36 }}
            />
          </Box>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            {department.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DepartmentFolder;