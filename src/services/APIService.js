import axios from "axios";

const LIST_OF_PLAYERS_URL = 'https://jsonplaceholder.typicode.com/todos/';

class APIService {

    getPlayers() {
      return axios.get(LIST_OF_PLAYERS_URL);
    }

    deletePlayers(playerId) {
        return axios.delete(LIST_OF_PLAYERS_URL + '/' + playerId);
    }

    createPlayers(player) {
        return axios.post(LIST_OF_PLAYERS_URL, player);
    }
}

export default new APIService();