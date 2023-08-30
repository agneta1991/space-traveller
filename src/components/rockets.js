import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRocketsAsync,
  reserveRocket,
  unreserveRocket,
  selectMappedRockets,
} from '../redux/rocketSlice';
import '../styles/Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const mappedRockets = useSelector(selectMappedRockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  const handleReserveClick = (rocketId, reserved) => {
    if (reserved) {
      dispatch(unreserveRocket(rocketId));
    } else {
      dispatch(reserveRocket(rocketId));
    }
  };

  useEffect(() => {
    console.log('data', mappedRockets);
    dispatch(fetchRocketsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="rocketsPage">
      {mappedRockets.map((rocket) => (
        <div className="individual-rocket" key={rocket.id}>
          <div>
            <img
              key={rocket.id}
              src={rocket.imageURL}
              alt={`Rocket ${rocket.rocket_name}`}
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="about-rocket">
            <h2>{rocket.rocket_name}</h2>
            <p>
              {rocket.reserved && (
                <span className="reservation-status">Reserved </span>
              )}
              {rocket.description}
            </p>
            <button
              className={`reserve-btn ${rocket.reserved ? 'reserved' : ''}`}
              type="button"
              onClick={() => handleReserveClick(rocket.id, rocket.reserved)}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
