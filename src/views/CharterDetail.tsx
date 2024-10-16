import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IHomeProps } from '../type';
import CardDetail from '../components/CardDetail';
import { Button, Box } from '@mui/material';

const CharacterDetail: React.FC<IHomeProps> = ({ characters }) => {
  const [checked, setChecked] = useState(true);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const characterId = parseInt(id || '0', 10);
  const character = characters[characterId - 1];

  if (!character) {
    return <div>No se encontró el personaje.</div>;
  }

  const handleBackToHome = () => {
    setChecked(false);
    setTimeout(() => {
      navigate('/home');
    }, 500);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp8013198.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ padding: 2, position: 'relative' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHome}
          sx={{
            position: 'fixed',
            top: 32,
            right: 32,
            zIndex: 1000,
          }}
        >
          Volver al Home
        </Button>

        <CardDetail character={character} checked={checked} />
      </Box>
    </Box>
  );
};

export default CharacterDetail;
