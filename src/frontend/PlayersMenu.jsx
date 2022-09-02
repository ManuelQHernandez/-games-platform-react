import React from 'react';
import Header from '../Components/Header';
import FormPlayersMenu from '../Components/Menus/FormPlayersMenu';
import '../assets/styles/App.css';
import Footer from '../Components/Footer';

const PlayersMenu = () => {
    return(
           <>
            <Header />
          <body>
              <FormPlayersMenu />
              <Footer />
          </body>
          </>
        );
    }
    export default PlayersMenu;