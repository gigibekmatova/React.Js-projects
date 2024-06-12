import React from "react";
import { myTeams } from "../data/data";
import Team from "./Team";

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
        {this.state.myTeams.map((team, index) => {
          return (
            <Team
              team={team}
              index={index}
              key={team.className}
              addANewVote={this.addANewVote}
            />
          );
        })}
      </div>
    );
  }
}

export default Teams;
