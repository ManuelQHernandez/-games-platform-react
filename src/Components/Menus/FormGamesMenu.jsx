import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Body.css';

const FormGamesMenu = () => {
    return(
        <main>

        <form action="" class="form-box">
            <h5>Games Menu</h5>
            <ul id="mMenu">
                <li><Link class="menu-btn" to="/Tictactoe">TicTacToe</Link></li>
                <li><Link class="menu-btn" to="/Hangman">Hangman</Link></li>
            </ul>
        </form>

    </main>
    );
}
export default FormGamesMenu;