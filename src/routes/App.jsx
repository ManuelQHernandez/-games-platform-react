import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hangman from '../frontend/Hangman';
import Tictactoe from '../frontend/Tictactoe';
import GamesMenu from '../frontend/GamesMenu';
import MainMenu from '../frontend/MainMenu'; 
import PlayersMenu from '../frontend/PlayersMenu';
import ListOfPlayers from '../frontend/ListOfPlayers';
import CreatePlayer from '../frontend/CreatePlayer';

const App = () => (
    <>
        <Routes>
           <Route path='/' exact element={ <MainMenu />} />
           <Route path='/FormGamesMenu' exact element= { <GamesMenu />} />
           <Route path='/FormPlayersMenu' exact element= { <PlayersMenu />} />
           <Route path='/Tictactoe' exact element= { <Tictactoe /> } />
           <Route path='/Hangman' exact element= { <Hangman /> } />
           <Route path='/ListOfPlayers' exact element = { <ListOfPlayers />} />
           <Route path='/CreatePlayer' exact element = { <CreatePlayer />} />
        </Routes>
    </>
);
export default App;