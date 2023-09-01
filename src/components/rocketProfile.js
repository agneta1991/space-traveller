import React from 'react';
import { useSelector } from 'react-redux';
import './MissionsProfile.css';

function RocketProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Rockets</h2>
      <table className="rocket-profile-table">
        <tbody>
          {bookedRockets.length === 0 ? (
            <tr>
              <td className="no-rocket-placeholder">No Rockets Added</td>
            </tr>
          ) : (
            bookedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RocketProfile;
