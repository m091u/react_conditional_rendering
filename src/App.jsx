// src/App.jsx
 
import './App.css';
import { useState } from 'react';
import Spinner from './components/Spinner';
import MovieList from './components/MovieList';
import ImprovedMovieList from './components/ImprovedMovieList';
 
function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(false); // <-- add
 
  if (isLoading) {
    return <Spinner />;
  } 
  else {
    return (
      <div className="App">
        {/* <MovieList /> */}

        <ImprovedMovieList />
        
      </div>
    );
  } 
}
 
export default App;