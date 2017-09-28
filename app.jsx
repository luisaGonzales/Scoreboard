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

const Header = (props) =>{
  return(
    <div>
      <div className="scoreboard">
        <p>PLAYERS{props.players.length}</p>
        <p></p>
      </div>
    </div>
  );
} 



const Application = ({title, players}) => {
   return (
     <div>
        <Header players={players}/>
        {/* <PlayerList players={players}/> */}
        {/* <PlayerForm /> */}
      </div>      
   );
}

ReactDOM.render(<Application title="Scoreboard" players = {players}/>, document.getElementById('container'));