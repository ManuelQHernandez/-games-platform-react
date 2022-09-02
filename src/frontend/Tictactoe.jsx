import React from 'react';
import Header from '../Components/Header';
import TictactoeMain from '../Components/TTT/TictactoeMain';
import '../assets/styles/App.css';
import Footer from '../Components/Footer';

const TicTacToe = () => {
    return(
           <>
           <Header />
           <body>
             <TictactoeMain />
             <Footer />
           </body>
           </>

);
}
export default TicTacToe;