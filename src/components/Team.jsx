function Team(team, index, addANewVote) {
  const { name, img, votes } = team;
  return (
    <div key={name}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <button onClick={() => addANewVote(index)}>Vote</button>
      <div>votes:{votes}</div>
    </div>
  );
}

export default Team;
