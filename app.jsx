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
						<td className="letter"><strong>{sumScore(scores)}</strong></td>
					</tr>
				</table>
			</div>
			<h1><strong>{props.title}</strong></h1>
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
		<div className="player">
			<div className="player-name">
				<center><strong>{player.name}</strong></center> 
			</div>
			<div className="player-score counter">
				<div className="counter-action decrement">
					-
				</div>
				<div className="counter-score">
					{player.score}
				</div>
				<div className=" counter-action increment">
					+
				</div>
			</div>
		</div>
	);
  });
}

function getScores (players){
	return players.map((player) =>{
		return (player.score);
	});
}

const scores = getScores(players);

function sumScore (scores){
	return scores.reduce((prev,current) =>{
		return prev + current;
	},0);
}

const Application = ({title, players}) => {
   return (
	 <div className="scoreboard">
		<Header players={players} title={title}/>
		<PlayerList players={players}/>
		<PlayerForm />
	  </div>      
   );
}

ReactDOM.render(<Application title="Scoreboard" players = {players}/>, document.getElementById('container'));