import React from 'react';
import '../../assets/styles/Body.css';
import '../../assets/styles/Hangman.css';

const HangmanMain = () => {
  return (
       <main>
           <h2>
            Choose players:
        </h2>

        <table class="playerTable" id="players">
            <thead>
              <tr>
                <th class="tableHead">Name</th>
                <th class="tableHead">Select</th>
              </tr>
           
            </thead>
            <tbody></tbody>
          </table>

          <button class="btnStart" id="startGame">Start</button>

          <div class="panelInput">

          <form action="" method="post" id="secret-word-form">
            <label>
            <input class="controls" type="text" placeholder="Enter secret word" />
            <input class="btnControls" type="submit" value="Submit"/>
           </label>
        </form>
  
    
       
        <div id="board">
            <div id="hangedman"></div>
            <div id="secret-word"></div>
        </div>

        
        <form action="" method="post" id="given-letter-form">
            <label>
            <input class="controls" type="text" placeholder="Enter letter" />
            <input class="btnControls" type="submit" value="Try" />
            </label>
        </form>


         </div>

       </main>
    );
};
export default HangmanMain;