import { usePeople } from './api/getAllPeople.api';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './views/LandingPage';
import Home from './views/Home';
import { Triangle } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { ICharacter } from './type';
import CharacterDetail from './views/CharterDetail';

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  
  const { data, isLoading, error } = usePeople();

  useEffect(() => {
    if (data) {
      setCharacters(data);
      localStorage.setItem('character', JSON.stringify(data));
    }
  }, [data, characters]);

  if (isLoading) {
    return (
      <div>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="red" 
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (error) {
    return <div>Error loading characters.</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home characters={characters} />} />
          <Route path="/home/:id" element={<CharacterDetail characters={characters} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
