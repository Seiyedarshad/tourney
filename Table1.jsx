import React from "react";
import { DataContext } from "../DataProvider";
import { useContext } from "react";

class Team {
  tName = "";
  tPoints = "0";
  tMP = "0";
  tGA = "0";
  tGD = "0";
  tGF = "0";
  Won = "0";
  Lost = "0";
  Drae = "0";
  constructor(name, Group) {
    this.tName = name;
    this.tGroup = Group;
  }

  getName() {
    return this.tName;
  }
  getMP() {
    return this.tMP;
  }
  getWon() {
    return this.Won;
  }
  getDraw() {
    return this.Drae;
  }
  getLost() {
    return this.Lost;
  }
  getPoints() {
    return this.tPoints;
  }
  getGD() {
    return this.tGD;
  }
  getGA() {
    return this.tGA;
  }
  getGF() {
    return this.tGF;
  }

  updateresult(result) {
    this.tPoints = parseInt(this.tPoints) + parseInt(result);
    this.tMP = parseInt(this.tMP) + 1;
    if (result === "3") this.Won = parseInt(this.Won) + 1;
    else if (result === "1") this.Drae = parseInt(this.Drae) + 1;
    else this.Lost = parseInt(this.Lost) + 1;
  }
}

function Table1() {
  let teamListA = [
    new Team("BMS Snipers", "A"),
    new Team("BMS Top G", "A"),
    new Team("UCL", "A"),
    new Team("BMS C", "A"),
  ];
  let teamListB = [
    new Team("BMS A", "B"),
    new Team("BMS B", "B"),
    new Team("APIIT", "B"),
    new Team("UCL", "B"),
  ];

  let [data] = useContext(DataContext);
  console.log(data);

  if (data[0] == "B") {
    const index = teamListA.findIndex((team) => team.tName == data[1]);
    const index2 = teamListA.findIndex((team) => team.tName == data[2]);

    // Update the teams' properties based on the scores
    if (data[3] > data[4]) {
      // Team 1 won, update wins and losses accordingly

      teamListA[0].updateresult("3");
      teamListA[1].updateresult("0");
    } else if (data[4] > data[3]) {
      // Team 2 won, update wins and losses accordingly

      teamListA[0].updateresult("3");
      teamListA[1].updateresult("0");
    } else {
      // It's a tie, update the appropriate properties if needed

      teamListA[index].updateresult("0");
      teamListA[index2].updateresult("0");
    }
  }

  // Clear stored values after retrieving them

  return (
    <>
      <div>
        <h1 className="TableName1" id="G-A">
          Group A
        </h1>
        <table className="Table">
          <thead>
            <tr>
              <th scope="Pos">Pos</th>
              <th scope="Name">Name</th>
              <th scope="M-P">M/P</th>
              <th scope="Won">Won</th>
              <th scope="Lost">Lost</th>
              <th scope="Draw">Draw</th>
              <th scope="Points">Points</th>
              <th scope="Goals Allowed">G/D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="first">1</th>
              <td> {teamListA[0].getName()}</td>
              <td className="back-align">{teamListA[0].getMP()}</td>
              <td className="back-align">{teamListA[0].getWon()}</td>
              <td className="back-align">{teamListA[0].getLost()}</td>
              <td className="back-align">{teamListA[0].getDraw()}</td>
              <td className="back-align">{teamListA[0].getPoints()}</td>
              <td className="back-align">{teamListA[0].getGD()}</td>
            </tr>
            <tr>
              <th scope="second">2</th>
              <td>{teamListA[1].getName()}</td>

              <td className="back-align">{teamListA[1].getMP()}</td>
              <td className="back-align">{teamListA[1].getWon()}</td>
              <td className="back-align">{teamListA[1].getLost()}</td>
              <td className="back-align">{teamListA[1].getDraw()}</td>
              <td className="back-align">{teamListA[1].getPoints()}</td>
              <td className="back-align">{teamListA[1].getGD()}</td>
            </tr>
            <tr>
              <th scope="first">3</th>
              <td>{teamListA[2].getName()}</td>
              <td text-align="center">{teamListA[2].getMP()}</td>
              <td className="back-align">{teamListA[2].getWon()}</td>
              <td className="back-align">{teamListA[2].getLost()}</td>
              <td className="back-align">{teamListA[2].getDraw()}</td>
              <td className="back-align">{teamListA[2].getPoints()}</td>
              <td className="back-align">{teamListA[2].getGD()}</td>
            </tr>
            <tr>
              <th scope="first">3</th>
              <td>{teamListA[3].getName()}</td>
              <td text-align="center">{teamListA[3].getMP()}</td>
              <td className="back-align">{teamListA[3].getWon()}</td>
              <td className="back-align">{teamListA[3].getLost()}</td>
              <td className="back-align">{teamListA[3].getDraw()}</td>
              <td className="back-align">{teamListA[3].getPoints()}</td>
              <td className="back-align">{teamListA[3].getGD()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="Table">
          <thead>
            <tr>
              <th scope="Name">Name</th>
              <th scope="M-P">M/P</th>
              <th scope="Won">Won</th>
              <th scope="Lost">Lost</th>
              <th scope="Draw">Draw</th>
              <th scope="Points">Points</th>
              <th scope="Goals Allowed">G/D</th>
            </tr>
          </thead>
          <tbody>
            {teamListB.map((team) => (
              <tr key={team.tName}>
                <td>{team.tName}</td>
                <td>{team.tPoints}</td>
                <td>{team.tMP}</td>
                <td>{team.tGD}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Drae}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="TableName">Group C</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
      <h1 className="TableName">Group D</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
      <h1 className="TableName">Group E</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
      <h1 className="TableName">Group F</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
      <h1 className="TableName">Group G</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
      <h1 className="TableName">Group H</h1>
      <table className="Table">
        <thead>
          <tr>
            <th scope="Pos">Pos</th>
            <th scope="Name">Name</th>
            <th scope="M-P">M/P</th>
            <th scope="Won">Won</th>
            <th scope="Lost">Lost</th>
            <th scope="Draw">Draw</th>
            <th scope="Points">Points</th>
            <th scope="Goals Allowed">G/D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="first">1</th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="second">2</th>
            <td text-align="center">BMS A</td>

            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td text-align="center">BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
          <tr>
            <th scope="first"></th>
            <td>BMS A</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
            <td className="back-align">0</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table1;
