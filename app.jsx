let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = (props) => {
  return(
    <div className="header">
      <section className="stats">
        <div>PLAYERS: {props.players.length}</div><br/>
        <div>TOTAL POINTS: </div>
      </section>
    </div>
  );
} 

const PlayerList = (props) => {
  return (
    <div>
      <ul>
        {mostrarPlayers(props.players)}
      </ul>
  </div>
  );
}

const PlayerForm = (props) => {
  return (
    <div>
      <input type="number"/>
      
    </div>
  );
}

function mostrarPlayers (players){
  return players.map((player, index)=>{
    return (

      <li key={index}>
        <p>{player.name}</p>
        <label className="counter-action.decrement">-</label>
        <span className="counter-score">{player.score}</span>
        <span className="counter-action.increment">+</span>
      </li>
    );
  });
}



const Application = ({title, players}) => {
   return (
     <div className="scoreboard">
        <Header players={players}/>
        <PlayerList players={players}/>
        <PlayerForm />
      </div>      
   );
}

ReactDOM.render(<Application title="Scoreboard" players = {players}/>, document.getElementById('container'));