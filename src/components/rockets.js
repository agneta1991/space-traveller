import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRocketsAsync,
  reserveRocket,
  unreserveRocket,
} from '../redux/rocketSlice';
import '../styles/Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  const handleReserveClick = (rocketId) => {
    const rocket = rockets.find((rocket) => rocket.id === rocketId);
    if (rocket) {
      if (rocket.reserved) {
        dispatch(unreserveRocket(rocketId));
      } else {
        dispatch(reserveRocket(rocketId));
      }
    }
  };

  useEffect(() => {
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
      {rockets.map((rocket) => (
        <div className="individual-rocket" key={rocket.id}>
          <div>
            <img
              key={rocket.id}
              src={rocket.flickr_images[0]}
              alt={`Rocket ${rocket.name}`}
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="about-rocket">
            <h2>{rocket.name}</h2>
            <p>
              {' '}
              {rocket.description}
            </p>
            <button
              className={`reserve-btn ${rocket.reserved ? 'reserved' : ''}`}
              type="button"
              onClick={() => handleReserveClick(rocket.id)}
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
