import { Card, CardContent, CardMedia, Typography, Zoom, Divider, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { ICardDetailProps, IFilm, IVehicle } from '../type';
import { useCharacterDetails } from '../api';

const CardDetail: React.FC<ICardDetailProps> = ({ character, checked }) => {

  const { data, isLoading, error } = useCharacterDetails(character);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        Error al cargar los detalles del personaje.
      </Typography>
    );
  }

  const { planet, films, vehicles, starships } = data || {};

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '650ms' : '0ms' }}>
      <Card sx={{ width: 800, margin: 'auto', mt: 4, boxShadow: 3, borderRadius: 16 }}>
        <CardMedia
          component="img"
          alt={character.name}
          height="500"
          image={`https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`} 
          sx={{ maxWidth: 300, margin: 'auto', mt: 4 }}
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {character.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Altura:</strong> {character.height} cm
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Peso:</strong> {character.mass} kg
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Color de cabello:</strong> {character.hair_color}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Color de piel:</strong> {character.skin_color}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Color de ojos:</strong> {character.eye_color}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Año de nacimiento:</strong> {character.birth_year}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>Género:</strong> {character.gender}
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>
            Mundo natal
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Nombre del planeta:</strong> {planet?.name}
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>
            Películas
          </Typography>
          <List dense>
            {films?.map((film: IFilm, index: number) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Título: ${film.title}`}
                  secondary={`Episodio: ${film.episode_id}, Año: ${new Date(film.release_date).getFullYear()}`}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>
            Vehículos
          </Typography>
          {vehicles && vehicles.length > 0 ? (
            <List dense>
              {vehicles.map((vehicle: IVehicle, index:number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Vehículo ${index + 1}: ${vehicle.name} (${vehicle.model})`}
                    secondary={`Velocidad: ${vehicle.max_atmosphering_speed} km/h, Clase: ${vehicle.vehicle_class}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Este personaje no tiene vehículos.
            </Typography>
          )}

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>
            Naves estelares
          </Typography>
          {starships && starships?.length > 0 ? (
            <List dense>
              {starships.map((starship: IVehicle, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Nave ${index + 1}: ${starship.name} (${starship.model})`}
                    secondary={`Velocidad: ${starship.max_atmosphering_speed} km/h, Clase: ${starship.vehicle_class}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Este personaje no tiene naves estelares.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default CardDetail;
