import React, { Component } from 'react';
import '../../assets/styles/ListPlayer.css';
import PlayerService from '../../services/APIService';


class ListPlayers extends Component {
     
    constructor(props) {
      super(props)

      this.state = {
         players: []
      }

      this.deletePlayers = this.deletePlayers.bind(this);

    }

    deletePlayers(id) {
        PlayerService.deletePlayers(id).then( res => {
             this.setState({players: this.state.players.filter(player => player.id !== id)});
        });
    }

      componentDidMount() {
        PlayerService.getPlayers().then((res) => {
          this.setState({ players: res.data});
        });
      }
    

  render() {
    return (
      <main>
      <table class="playerTable" id="players">
        <thead>
          <tr>
            <th class="tableHead">Name</th>
            <th class="tableHead">Action</th>
          </tr>
        </thead>
        <tbody>
             {
              this.state.players.map(
                player =>
                <tr key={player.id}>
                  <td>{ player.title }</td>
                  <td class="tableData"><button class="delete-btn" onClick={ () => this.deletePlayers(player.id)}>Delete</button></td>
                </tr>
              )
             }
        </tbody>
      </table>
    </main>
    )
  }

}
 export default ListPlayers;

/**const ListPlayers = () => {

  
  return (
    <main>
      <table class="playerTable" id="players">
        <thead>
          <tr>
            <th class="tableHead">Name</th>
            <th class="tableHead">Action</th>
          </tr>
        </thead>
        <tbody>
             {playerList}
        </tbody>
      </table>
    </main>
  );
}
export default ListPlayers;**/
