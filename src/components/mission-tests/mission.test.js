import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toBeInTheDocument, toHaveTextContent } from '@testing-library/jest-dom/matchers'; // Import matchers
import Missions from '../missions';

expect.extend({ toBeInTheDocument, toHaveTextContent });

const mockStore = configureStore([]);

describe('Missions Component', () => {
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

  it('renders loading state', () => {
    store = mockStore({
      missions: {
        data: [],
        status: 'loading',
        error: null,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders error state', () => {
    store = mockStore({
      missions: {
        data: [],
        status: 'failed',
        error: 'Test Error',
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders mission data and handles joining/leaving', async () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinButton = getByText('Join Mission');
    fireEvent.click(joinButton);

    await waitFor(() => {
      const updatedJoinButton = getByText('Leave Mission');
      expect(updatedJoinButton).toBeInTheDocument();
    });

    const leaveButton = getByText('Leave Mission');
    fireEvent.click(leaveButton);

    await waitFor(() => {
      const updatedLeaveButton = getByText('Join Mission');
      expect(updatedLeaveButton).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
