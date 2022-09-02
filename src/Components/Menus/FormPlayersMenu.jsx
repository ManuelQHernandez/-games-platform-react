import React from 'react';
import '../../assets/styles/Body.css';
import { Link } from 'react-router-dom';

const FormPlayersMenu = () => {
    return(
        <main>
        <form action="" class="form-box">
            <h5>Players Menu</h5>
            <ul id="mMenu">
                <li><Link class="menu-btn" to="/CreatePlayer">Create Player</Link></li>
                <li><Link class="menu-btn" to="/ListOfPlayers">List Players</Link></li>
            </ul>
        </form>
    </main>


        );
    }
    export default FormPlayersMenu;