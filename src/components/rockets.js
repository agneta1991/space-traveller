import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchRocketsAsync } from '../redux/rocketSlice';

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
    <div>
      <h1>Rockets</h1>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          <p>
            ID:
            {rocket.id}
          </p>
          <p>
            Type:
            {rocket.type}
          </p>
          <div>
            {rocket.flickr_images.map((image) => (
              <img
                key={uuidv4()}
                src={image}
                alt={`Rocket ${rocket.name}`}
                style={{ maxWidth: '300px' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
