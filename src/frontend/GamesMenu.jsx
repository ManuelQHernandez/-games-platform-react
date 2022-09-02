import React from 'react';
import Header from '../Components/Header';
import FormGamesMenu from '../Components/Menus/FormGamesMenu';
import '../assets/styles/App.css';
import Footer from '../Components/Footer';

const GamesMenu = () => {
    return(
           <>
            <Header />
          <body>
              <FormGamesMenu />
              <Footer />
          </body>
          </>
        );
    }
    export default GamesMenu;