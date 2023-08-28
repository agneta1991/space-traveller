import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

export default function mission(
  {
    missionId,
    missionName,
    description,
    onJoinMission,
  },
) {
  const handleJoinMission = () => {
    onJoinMission(missionId);
  };
  return (
    <div className="mission">
      <div className="missionTableHead">
        <div className="missionTitle">
          <h4>Mission</h4>
        </div>
        <div className="descriptionTitle">
          <h4>Description</h4>
        </div>
        <div className="statusTitle">
          <h4>Status</h4>
        </div>
        <div className="actionTitle">
          <h4>Action</h4>
        </div>
      </div>
      <div className="missionTableBody">
        <div className="missionName">
          <p>{missionName}</p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="status">
          <p>Active</p>
        </div>
        <div className="action">
          <button type="button" onClick={handleJoinMission} className="joinBtn">Join Mission</button>
        </div>
      </div>
    </div>
  );
}

mission.propTypes = {
  missionId: propTypes.string.isRequired,
  missionName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  onJoinMission: propTypes.func.isRequired,
};
