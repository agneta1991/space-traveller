/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, selectMappedMissions } from '../redux/missions/missionsSlice';
import './MissionsTable.css';

function MissionsTableComponent() {
  const dispatch = useDispatch();
  const mappedMissions = useSelector(selectMappedMissions);

  const handleToggleMission = (missionId, reserved) => {
    if (reserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

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
          <tr
            key={mission.mission_id}
            className={index % 2 === 0 ? 'even-row' : 'odd-row'}
          >
            <td className="bold-text">{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><p style={{ backgroundColor: mission.reserved ? '#419bf9' : '#6d757d' }} className="status">{mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</p></td>
            <td className="joinContainer">
              <button
                type="button"
                className="joinMission"
                onClick={() => handleToggleMission(mission.mission_id, mission.reserved)}
                style={{ color: mission.reserved ? 'red' : '', border: mission.reserved ? '1px solid red' : '' }}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MissionsTableComponent;
