import React from 'react';
import Header from '../Components/Header';
import '../assets/styles/App.css';
import Footer from '../Components/Footer';
import FormCreatePlayer from '../Components/Menus/FormCreatePlayer';


const CreatePlayer = () => {
    return(
        <>
        <Header />
      <body>
          <FormCreatePlayer />
          <Footer />
      </body>
      </>
        );
    }
    export default CreatePlayer;

