import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ListPlayers from '../Components/Menus/ListPlayers';
import '../assets/styles/App.css';

const ListOfPlayers = () => {
    return(
           <>
             <Header />
              <body>
                 <ListPlayers />
                 <Footer />
              </body>
           </>

);
}
export default ListOfPlayers;