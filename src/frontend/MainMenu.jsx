import React from 'react';
import Header from '../Components/Header';
import FormMainMenu from '../Components/Menus/FormMainMenu';
import Footer from '../Components/Footer';
import '../assets/styles/App.css';



const MainMenu = () => {
    return(
           <>
            <Header />
          <body>
              <FormMainMenu />
              <Footer />
          </body>
          </>
        );
    }
    export default MainMenu;