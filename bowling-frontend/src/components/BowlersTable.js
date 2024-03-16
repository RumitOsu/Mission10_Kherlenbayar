// src/components/BowlersTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function BowlersTable() {
  const [bowlers, setBowlers] = useState([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        // Fetch bowlers from the Sharks team
        const sharksResponse = await axios.get(
          "https://localhost:44394/api/Bowlers/Sharks"
        );

        // Fetch bowlers from the Marlins team
        const marlinsResponse = await axios.get(
          "https://localhost:44394/api/Bowlers/Marlins"
        );

        // Combine the results
        const combinedBowlers = [
          ...sharksResponse.data,
          ...marlinsResponse.data,
        ];
        setBowlers(combinedBowlers);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBowlers();
  }, []);

  return (
    <div>
      <h2>Bowlers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit} ${bowler.bowlerLastName}`}</td>
              <td>{bowler.team?.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlersTable;
