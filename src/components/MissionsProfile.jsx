import React from 'react';
import { useSelector } from 'react-redux';
import { selectMappedMissions } from '../redux/missions/missionsSlice';
import './MissionsProfile.css';

function MissionsProfile() {
  const mappedMissions = useSelector(selectMappedMissions);

  // Filter joined missions
  const joinedMissions = mappedMissions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2>My Missions</h2>
      <table className="missions-profile-table">
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionsProfile;
