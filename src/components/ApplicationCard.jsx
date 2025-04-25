import { Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import departments from '../data/departments';

function ApplicationCard({ application, departmentId }) {
  const navigate = useNavigate();
  
  const getDepartmentColor = () => {
    if (application.departmentColor) {
      return application.departmentColor;
    }
    const department = departments.find(dept => dept.id === departmentId);
    return department ? department.color : '#cccccc'; 
  };
  
  const handleClick = () => {
    if (application && application.url) {
      navigate(`/${departmentId}/${application.id}`);
    } else {
      console.error('URL no disponible para:', application?.name);
    }
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{ 
        width: 280, 
        height: 180,
        display: 'flex',
        flexDirection: 'row', 
        m: 2,
        borderRadius: 2,
        boxShadow: 3,
        cursor: 'pointer',
        overflow: 'hidden', 
        position: 'relative', 
        '&:hover': {
          transform: 'scale(1.03)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: '#f5f5f5'
        }
      }}
    >
      <Box 
        sx={{
          width: '8px',
          height: '100%',
          backgroundColor: getDepartmentColor(),
        }}
      />
      <CardContent sx={{ 
        height: '100%', 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        p: 2 
      }}>
        <Box display="flex" alignItems="center" mb={2}>
          <img 
            src={application.icon} 
            alt={`Icono de ${application.name}`} 
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Typography gutterBottom variant="h6" component="div">
            {application.name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {application.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ApplicationCard;