import React from 'react';
import '../../assets/styles/Body.css';
import { Link } from 'react-router-dom';

const FormMainMenu = () => {



    return(
    
    <main>

        <form action="" class="form-box">
          <h5>Main Menu</h5>
          <ul id="mMenu">
            <li><Link class="menu-btn" to="/FormGamesMenu">Play</Link></li>
            <li><Link class="menu-btn" to="/FormPlayersMenu">Manage Players</Link></li>
            <li><a class="menu-btn" href="#">Statistics</a></li>
          </ul>
        </form>
        
      </main>
    
        );
    }
    export default FormMainMenu;