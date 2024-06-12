import React from "react";
import { myTeams } from "../data/data";

class Teams extends React.Component {
  constructor() {
    super();
    this.state = { myTeams: myTeams };
  }
  addANewVote = (index) => {
    const prevState = [...this.state.myTeams];
    prevState[index].votes++;
    this.setState({ myTeams: prevState });
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={this.state.myTeams[0].img} alt="" />
          <h3>{this.state.myTeams[0].name}</h3>
          <button onClick={() => this.addANewVote(0)}>Vote</button>
          <div>votes:{this.state.myTeams[0].votes}</div>
        </div>

        <div>
          <img src={this.state.myTeams[1].img} alt="" />
          <h3>{this.state.myTeams[1].name}</h3>
          <button onClick={() => this.addANewVote(1)}>Vote</button>
          <div>votes:{this.state.myTeams[1].votes}</div>
        </div>

        <div>
          <img src={this.state.myTeams[2].img} alt="" />
          <h3>{this.state.myTeams[2].name}</h3>
          <button onClick={() => this.addANewVote(2)}>Vote</button>
          <div>votes:{this.state.myTeams[2].votes}</div>
        </div>
      </div>
    );
  }
}

export default Teams;
