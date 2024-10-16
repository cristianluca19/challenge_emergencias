import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MotionBox from '../components/MotionBox';
import logo from '../logo.png'

export default function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <Box
    sx={{
      backgroundImage: `url('https://media.istockphoto.com/id/500755774/es/foto/lightsaber-en-el-espacio-medio-ambiente-listo-para-bocetos-de-sus-personajes.jpg?s=612x612&w=0&k=20&c=nn81aIKxaOScCXmqCnwytgTez4K4vprTKcorIIgOyrA=')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
        zIndex: 2
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom sx={{color:"white"}}>
          Bienvenido a Star Wars Characters
        </Typography>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typography variant="h5" gutterBottom sx={{color:"white"}}>
          Explora los personajes más icónicos del universo de Star Wars
          presentados en tarjetas interactivas con detalles fascinantes.
        </Typography>
      </MotionBox>
      <MotionBox
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            maxWidth: 300,
            marginY: 4,
            borderRadius: '8px',
            boxShadow: 3,
          }}
          alt="Star Wars"
          src={logo}
        />
      </MotionBox>
      <MotionBox
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleButtonClick}
        >
          Ver personajes
        </Button>
      </MotionBox>
    </Container>
    </Box>
  );
}