import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Breadcrumbs, IconButton, Button, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link as RouterLink } from 'react-router-dom';
import departments from '../data/departments';

function EmbeddedAppPage() {
  const { departmentId, appId } = useParams();
  const navigate = useNavigate();

  const department = departments.find(dept => dept.id === departmentId);
  const application = department?.applications.find(app => app.id === appId);

  if (!department || !application) {
    navigate('/');
    return null;
  }

  const handleBack = () => {
    navigate(`/${departmentId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2, height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={handleBack} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Breadcrumbs aria-label="breadcrumb">
          <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Inicio
          </RouterLink>
          <RouterLink to={`/${departmentId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {department.name}
          </RouterLink>
          <Typography color="text.primary">
            {application.name}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5" component="h1" sx={{ mr: 2 }}>
          {application.name}
        </Typography>
        <Tooltip title="Abrir en nueva pestaña">
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<OpenInNewIcon />}
            onClick={() => window.open(application.url, '_blank')}
          >
            Abrir externo
          </Button>
        </Tooltip>
      </Box>

      <Box sx={{ flexGrow: 1, border: '1px solid #ddd', borderRadius: 1, overflow: 'hidden' }}>
        <iframe
          src={application.url} 
          title={application.name}
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-modals"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer"
          loading="eager"
          importance="high"
        />
      </Box>
    </Container>
  );
}

export default EmbeddedAppPage;