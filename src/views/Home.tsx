import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grow, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { IHomeProps } from '../type';

export default function Home({ characters }: IHomeProps) {
    const navigate = useNavigate();
    const chartersData = characters || localStorage.getItem(JSON.parse('data')) || [];

  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  // Función para manejar la búsqueda por nombre
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el filtro por género
  const handleGenderFilterChange = (event: SelectChangeEvent<string>) => {
    setGenderFilter(event.target.value as string);
  };

  // Función para manejar el click en una carta
  const handleCardClick = (characterId: number) => {
    navigate(`/home/${characterId}`);
  };

  // Filtrado por nombre y género
  const filteredCharacters = chartersData.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter ? character.gender === genderFilter : true;
    return matchesSearch && matchesGender;
  });

  return (
    <Box
      sx={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp8013198.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, borderRadius: 8 }}>
        <TextField
          label="Buscar por nombre"
          variant="filled"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ marginRight: 2, backgroundColor: 'white', borderRadius: 8 }}
        />
        <FormControl variant="filled" sx={{ width: 250, backgroundColor: 'white', borderRadius: 8 }}>
          <InputLabel>Filtrar por género</InputLabel>
          <Select
            value={genderFilter}
            onChange={handleGenderFilterChange}
            sx={{ width: 250, backgroundColor: 'white', borderRadius: 8 }}
            label="Filtrar por género"
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="male">Masculino</MenuItem>
            <MenuItem value="female">Femenino</MenuItem>
            <MenuItem value="n/a">N/A</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/')}
          sx={{ borderRadius: 8 }}
        >
          Regresar al Landing Page
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredCharacters.map((character, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
            key={index}
          >
            <Grid item xs={12} sm={6} md={3} wrap="nowrap">
              <Card onClick={() => handleCardClick(index + 1)} sx={{ backgroundColor: 'transparent' }}>
                <CardActionArea>
                  <Box
                    sx={{
                      width: '75%',
                      height: '60%',
                      borderRadius: 16,
                      margin: 2,
                      border: '4px solid  white',
                      padding: 2,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        border: '0px solid white',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="394"
                      image={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                      alt={character.name}
                      sx={{ borderRadius: 16 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                        {character.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        <strong>Altura:</strong> {character.height} cm
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        <strong>Peso:</strong> {character.mass} kg
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        <strong>Color de cabello:</strong> {character.hair_color}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        <strong>Género:</strong> {character.gender}
                      </Typography>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
};
