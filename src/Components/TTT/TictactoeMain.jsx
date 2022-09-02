import React from 'react';
import '../../assets/styles/Body.css';
import '../../assets/styles/Tictactoe.css';

const TictactoeMain = () => {
  return (
    <main>
      <h2>Choose players:</h2>
      <table class="playerTable" id="players">
        <thead>
          <tr>
            <th class="tableHead">Name</th>
            <th class="tableHead">Select</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <button class="btnStartTTT" id="startGame">
          Start
        </button>

      <table class="form-box" id="board">
       

        <tr id="trBackgroud">
          <td id="tdTTT"></td>
          <td id="tdTTT" class="vertical"></td>
          <td id="tdTTT"></td>
        </tr>
        <tr id="trBackgroud">
          <td id="tdTTT" class="horizontal"></td>
          <td id="tdTTT" class="vertical horizontal"></td>
          <td id="tdTTT" class="horizontal"></td>
        </tr>
        <tr id="trBackgroud">
          <td id="tdTTT"></td>
          <td id="tdTTT" class="vertical"></td>
          <td id="tdTTT"></td>
        </tr>
      </table>
    </main>
  );
};
export default TictactoeMain;
