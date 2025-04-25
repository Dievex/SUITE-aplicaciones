import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import EmbeddedAppPage from './pages/EmbeddedAppPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E53935',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:departmentId" element={<DepartmentPage />} />
            <Route path="/:departmentId/:appId" element={<EmbeddedAppPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;