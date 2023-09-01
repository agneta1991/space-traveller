import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import MissionsProfile from '../MissionsProfile'; // Update the import path accordingly

expect.extend({ toBeInTheDocument });
const mockStore = configureStore([]);

describe('MissionsProfile Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        data: [
          {
            mission_id: '1',
            mission_name: 'Test Mission 1',
            description: 'Test Description 1',
            reserved: false,
          },
          {
            mission_id: '2',
            mission_name: 'Test Mission 2',
            description: 'Test Description 2',
            reserved: true,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });
  });

  it('renders joined missions', () => {
    const { container } = render(
      <Provider store={store}>
        <MissionsProfile />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders "No Missions Added" when no missions are joined', () => {
    store = mockStore({
      missions: {
        data: [
          {
            mission_id: '1',
            mission_name: 'Test Mission 1',
            description: 'Test Description 1',
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    const { getByText, container } = render(
      <Provider store={store}>
        <MissionsProfile />
      </Provider>,
    );

    expect(getByText('No Missions Added')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
