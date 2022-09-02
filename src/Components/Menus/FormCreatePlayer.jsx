import React, { Component } from 'react';

import '../../assets/styles/Body.css';
import '../../assets/styles/CreatePlayer.css';
import PlayerService from '../../services/APIService';


class FormCreatePlayer extends Component {
    
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      name: '',
      type: ''
    }
    
  }

  componentDidMount() {
     
  }

  changeNameHandler(event) {
    this.setState({name: event.target.value});
  }

  createPlayer = (e) => {
    e.preventDefault();
    let players = {name: this.state.name, type: this.state.type};
    console.log('Player => ' + JSON.stringify(players));

  }

render() {

  return (
    <main>
    <form action="" class="form-box">
      <h5>Creating a player</h5>
      <label> Name: </label>
      <input class="inputName" id="playerName" value={this.state.name} onChange={this.changeNameHandler} placeholder="Write your name"/>
      
      <label class="rad-label">      
      <input class="rad-input" type="radio" value="Human" name="playerType"/>
      <div class="rad-design"></div>
      <div class="rad-text">Human</div>
      </label>

      <label class="rad-label">
        <input class="rad-input" type="radio" value="Bot" name="playerType"/>
        <div class="rad-design"></div>
        <div class="rad-text">Bot</div>
      </label> 

      <input class="btnCreate" type="button" id="createPlayer" value="Save"></input>


    </form>
  </main>
  )
 }
}
export default FormCreatePlayer;



