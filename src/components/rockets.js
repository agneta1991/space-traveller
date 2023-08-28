import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'suuid';
import { fetchRocketsAsync } from '../redux/rocketSlice';
import '../styles/Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

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
            {rocket.flickr_images.length > 0 && (
              <img
                key={rocket.id}
                src={rocket.flickr_images[0]}
                alt={`Rocket ${rocket.name}`}
                style={{ maxWidth: '300px' }}
              />
            )}
          </div>
          <div className="about-rocket">
            <h2>{rocket.name}</h2>
            {/* <p>
              ID:
              {rocket.id}
            </p>
            <p>
              Type:
              {rocket.type}
            </p> */}
            <p>
              {' '}
              {rocket.description}
            </p>
            <button className="reserve-btn" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
