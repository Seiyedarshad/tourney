import React, { useState } from "react";
import { DataContext } from "../DataProvider";
import { useContext } from "react";
export default function AddScore() {
  const [data, setData] = useContext(DataContext);
  const [group, setGroup] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store the data in the context
    setData({ group, team1, team2, score1, score2 });
    // Reset the input fields
    setGroup("");
    setTeam1("");
    setTeam2("");
    setScore1("");
    setScore2("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Group:</label>
        <input
          type="text"
          value={group}
          onChange={(event) => setGroup(event.target.value)}
        />

        <label>Team 1:</label>
        <input
          type="text"
          value={team1}
          onChange={(event) => setTeam1(event.target.value)}
        />

        <label>Team 2:</label>
        <input
          type="text"
          value={team2}
          onChange={(event) => setTeam2(event.target.value)}
        />

        <label>Team 1 Score:</label>
        <input
          type="text"
          value={score1}
          onChange={(event) => setScore1(event.target.value)}
        />

        <label>Team 2 Score:</label>
        <input
          type="text"
          value={score2}
          onChange={(event) => setScore2(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
