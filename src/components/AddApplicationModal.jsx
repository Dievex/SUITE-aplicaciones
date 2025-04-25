import { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function AddApplicationModal({ open, onClose, onAddApplication, departmentId }) {
  const [newApp, setNewApp] = useState({
    name: '',
    description: '',
    url: '',
    icon: '/icons/applications/default-app.svg' 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewApp(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newApp.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!newApp.description.trim()) newErrors.description = 'La descripción es obligatoria';
    if (!newApp.url.trim()) newErrors.url = 'La URL es obligatoria';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newAppId = `app-${departmentId}-${Date.now()}`;
      
      onAddApplication({
        ...newApp,
        id: newAppId
      });
      
      setNewApp({
        name: '',
        description: '',
        url: '',
        icon: '/icons/applications/default-app.svg'
      });
      
      onClose();
    }
  };

  const handleCancel = () => {
    setNewApp({
      name: '',
      description: '',
      url: '',
      icon: '/icons/applications/default-app.svg'
    });
    setErrors({});
    onClose();
  };

  const availableIcons = [
    { value: '/icons/applications/default-app.svg', label: 'Predeterminado' },
    { value: '/icons/applications/app-it-1.svg', label: 'IT' },
    { value: '/icons/applications/app-calidad-1.svg', label: 'Calidad' },
    { value: '/icons/applications/app-logistica-1.svg', label: 'Logística' },
    { value: '/icons/applications/app-finanzas-1.svg', label: 'Finanzas' }
  ];

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>Añadir Nueva Aplicación</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Nombre de la aplicación"
            type="text"
            fullWidth
            variant="outlined"
            value={newApp.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2 }}
          />
          
          <TextField
            margin="dense"
            name="description"
            label="Descripción"
            type="text"
            fullWidth
            variant="outlined"
            value={newApp.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            sx={{ mb: 2 }}
          />
          
          <TextField
            margin="dense"
            name="url"
            label="URL de la aplicación"
            type="url"
            fullWidth
            variant="outlined"
            value={newApp.url}
            onChange={handleChange}
            error={!!errors.url}
            helperText={errors.url}
            sx={{ mb: 2 }}
          />
          
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="icon-select-label">Icono</InputLabel>
            <Select
              labelId="icon-select-label"
              name="icon"
              value={newApp.icon}
              onChange={handleChange}
              label="Icono"
            >
              {availableIcons.map((icon) => (
                <MenuItem key={icon.value} value={icon.value}>
                  <Box display="flex" alignItems="center">
                    <img 
                      src={icon.value} 
                      alt={icon.label} 
                      style={{ width: 24, height: 24, marginRight: 8 }}
                    />
                    <Typography>{icon.label}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained" startIcon={<AddIcon />}>
          Añadir
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddApplicationModal;