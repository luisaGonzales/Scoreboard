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
			<div className="stats">
				<table>
					<tr>
						<td>Player: </td>
						<td className="letter"><strong>{props.players.length}</strong></td>
					</tr>
					<tr>
						<td>Total Points: </td>
						<td className="letter"><strong>180</strong></td>
					</tr>
				</table>
			</div>
			<h1>Scoreboard</h1>
			<div className="stopwatch">
				<h2>STOPWATCH</h2>
				<div className="stopwatch-time">
					0
				</div>
				<div>
					<button><strong>START</strong></button>
					<button><strong>RESET</strong></button>
				</div>
			</div>
		</div>
  	);
} 

const PlayerList = (props) => {
  return (
	  <div>{showPlayers(props.players)}</div> 
  );
}

const PlayerForm = (props) => {
  return (
    <div className="add-player-form">
		<form>
			<input type="text"placeholder="ENTER A NAME"/>
            <input type="submit" value="ADD PLAYER"/>
		</form>
    </div>
  );
}

function showPlayers (players){
  return players.map((player, index)=>{
    return (
		<div class="player">
			<ul class="player-name">
				<li>
					<center><strong>{player.name}</strong></center> 
				</li>
			</ul>
			<div class="player-score counter">
				<div class="counter-action decrement">
					-
				</div>
				<div class="counter-score">
				{player.score}
				</div>
				<div class=" counter-action increment">
					+
				</div>
			</div>
		</div>
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