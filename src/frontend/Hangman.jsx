import React from 'react';
import HangmanMain from '../Components/Hangman/HangmanMain';
import '../assets/styles/App.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Hangman = () => {
    return(
           <>
           <Header />
            <body>
                <HangmanMain />
                <Footer />
            </body>
           </>

);
}
export default Hangman;