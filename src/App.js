import React from 'react';
import logo from './logo.svg';
import './App.css';


class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
  }
  componentDidMount() {
    fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=C5228C36FCE527EBDB593D432B74CC90&steamids=76561198063857720")
      .then(data => {
        console.log(data)
        this.setState(data)
      }).catch(rej => {

      })
  }
  render() {
    return (<div>
      Hi
    </div>)
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id1: "", id2: "", player1: undefined, player2: undefined }
  }

  startGame() {
    fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=C5228C36FCE527EBDB593D432B74CC90&steamids=" + this.state.id1)
      .then(data => {
        console.log(data)
        this.setState({ player1: data })
      }).catch(rej => {

      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KeyArena MVP</h1>
          <div className="frameset">
            Bitte die steamID64 beider Spieler eingeben.<br /><br />
            <span style={{ fontSize: ".5em", color: "#999" }}>
              Spieler 1<span class="formRowHint" data-tooltip-text="Choosing your location is a great way to connect with other local players, groups and friends.">(?)</span> &ensp;
              <input onChange={(e) => { this.setState({ id1: e.target.value }) }} value={this.state.id1} /><br />
              Spieler 2 <span class="formRowHint" data-tooltip-text="Choosing your location is a great way to connect with other local players, groups and friends.">(?)</span> &ensp;
              <input onChange={(e) => { this.setState({ id2: e.target.value }) }} value={this.state.id2} />
            </span>
            <br />
            <button onClick={() => { this.startGame() }}
              className="btn">Spiel beginnen</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
