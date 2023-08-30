import React from 'react';
import { useSelector } from 'react-redux';
import { selectMappedRockets } from '../redux/rocketSlice';

function RocketProfile() {
  const mappedRockets = useSelector(selectMappedRockets);
  const bookedRockets = mappedRockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <table className="rocket-profile-table">
        <tbody>
          {bookedRockets.length === 0 ? (
            <tr>
              <td className="no-rocket-placeholder">No Rockets Added</td>
            </tr>
          ) : (
            bookedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RocketProfile;
