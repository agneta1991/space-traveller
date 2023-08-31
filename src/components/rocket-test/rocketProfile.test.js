import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketProfile from '../rocketProfile';

const mockStore = configureStore([]);

describe('RocketProfile', () => {
  it('should display "No Rockets Added" when there are no rockets booked', () => {
    const initialState = {
      rockets: {
        rockets: [],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <RocketProfile />
      </Provider>,
    );

    const noRockets = getByText('No Rockets Added');
    expect(noRockets).toMatchSnapshot();
  });

  it('should display all rockets that have been booked', () => {
    const initialState = {
      rockets: {
        rockets: [
          { id: 1, name: 'Falcon 1', reserved: true },
          { id: 2, name: 'Falcon 9', reserved: true },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <RocketProfile />
      </Provider>,
    );

    const rocket1Text = getByText('Falcon 1');
    const rocket2Text = getByText('Falcon 9');
    expect(rocket1Text).toMatchSnapshot();
    expect(rocket2Text).toMatchSnapshot();
  });
});
