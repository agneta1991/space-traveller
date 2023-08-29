/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMappedMissions } from '../redux/missions/missionsSlice';
import './MissionsTable.css';

function MissionsTableComponent() {
  const mappedMissions = useSelector(selectMappedMissions);

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th className="wider-column">Description</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {mappedMissions.map((mission, index) => (
          <tr key={mission.mission_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td className="bold-text">{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>{mission.status === 'a member' ? 'A Member' : 'Not a Member'}</td>
            <td className="joinContainer"><button type="button" className="joinMission">Join Mission</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MissionsTableComponent;
