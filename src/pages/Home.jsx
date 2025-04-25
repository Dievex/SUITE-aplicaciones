import { Container, Typography, Grid, Box, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ApplicationCard from '../components/ApplicationCard';
import departments from '../data/departments';
import { useState } from 'react';

function Home() {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleFilterChange = (departmentId) => {
    setSelectedDepartment(departmentId);
  };
  
  const getAllApplications = () => {
    let allApps = [];
    departments.forEach(dept => {
      dept.applications.forEach(app => {
        allApps.push({
          ...app,
          departmentId: dept.id,
          departmentName: dept.name,
          departmentColor: dept.color
        });
      });
    });
    return allApps;
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredApps = getAllApplications()
    .filter(app => {
      const matchesDepartment = selectedDepartment === 'todos' || app.departmentId === selectedDepartment;
      
      const matchesSearch = searchTerm === '' || 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        app.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesDepartment && matchesSearch;
    });
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>        
        <Box textAlign="left">
          <Typography variant="h4" component="h1" gutterBottom>
            Suite de Aplicaciones
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Todas las aplicaciones en un solo lugar
          </Typography>
        </Box>
        
        <TextField
          placeholder="Buscar aplicaciones..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ 
            width: { xs: '100%', sm: '250px' },
            mt: { xs: 2, sm: 0 },
            ml: { xs: 0, sm: 2 },
            mb: { xs: 2, sm: 0 },
            maxWidth: { xs: '100%', sm: '250px' }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: 2 }
          }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          <Button 
            variant={selectedDepartment === 'todos' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('todos')}
            sx={{ borderRadius: 4, px: 2 }}
          >
            Todos
          </Button>
          
          {departments.map((department) => (
            <Button
              key={department.id}
              variant={selectedDepartment === department.id ? 'contained' : 'outlined'}
              onClick={() => handleFilterChange(department.id)}
              sx={{ 
                borderRadius: 4, 
                px: 2,
                bgcolor: selectedDepartment === department.id ? department.color : 'transparent',
                '&:hover': {
                  bgcolor: selectedDepartment === department.id ? department.color : 'rgba(0, 0, 0, 0.04)'
                }
              }}
              startIcon={
                <Box 
                  component="img" 
                  src={department.icon} 
                  alt={department.name}
                  sx={{ width: 20, height: 20 }}
                />
              }
            >
              {department.name}
            </Button>
          ))}
        </Box>
      
      <Grid container spacing={3} justifyContent="center">
        {filteredApps.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app.id}>
            <ApplicationCard application={app} departmentId={app.departmentId} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;