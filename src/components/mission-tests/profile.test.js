import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../profile';

const mockStore = configureStore([]);

describe('Profile Component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Falcon 1',
            description: 'Description 1',
            imageURL: 'image_url_1.jpg',
            reserved: true,
          },
          {
            id: '2',
            rocket_name: 'Falcon 9',
            description: 'Description 2',
            imageURL: 'image_url_2.jpg',
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      },
      missions: {
        data: [
          {
            mission_id: '1',
            mission_name: 'Test Mission 1',
            description: 'Test Description 1',
            reserved: true,
          },
          {
            mission_id: '2',
            mission_name: 'Test Mission 2',
            description: 'Test Description 2',
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
