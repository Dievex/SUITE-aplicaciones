import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Box, Button, Breadcrumbs, Fab, Tooltip } from '@mui/material';
import ApplicationCard from '../components/ApplicationCard';
import AddApplicationModal from '../components/AddApplicationModal';
import departments from '../data/departments';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

function DepartmentPage() {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [departmentApps, setDepartmentApps] = useState([]);
  
  const department = departments.find(dept => dept.id === departmentId);
  
  if (!department) {
    navigate('/');
    return null;
  }
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleAddApplication = (newApp) => {
    setDepartmentApps(prev => [...prev, newApp]);
    
    console.log('Nueva aplicación añadida:', newApp);
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Inicio
        </RouterLink>
        <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
          {department.name}
        </Typography>
      </Breadcrumbs>
      
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
        <Typography variant="h4" component="h1">
          Departamento de {department.name}
        </Typography>
        <Tooltip title="Añadir aplicación">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
          >
            Añadir aplicación
          </Button>
        </Tooltip>
      </Box>
      
      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        Seleccione una aplicación para acceder
      </Typography>
      
      <Grid container spacing={3}>
        {department.applications.map((application) => (
          <Grid item xs={12} sm={6} md={4} key={application.id}>
            <ApplicationCard application={application} departmentId={departmentId} />
          </Grid>
        ))}
        
        {departmentApps.map((application) => (
          <Grid item xs={12} sm={6} md={4} key={application.id}>
            <ApplicationCard application={application} departmentId={departmentId} />
          </Grid>
        ))}
      </Grid>
      
      <AddApplicationModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        onAddApplication={handleAddApplication}
        departmentId={departmentId}
      />
    </Container>
  );
}

export default DepartmentPage;