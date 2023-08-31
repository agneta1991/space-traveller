import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../rockets';

jest.mock('../../redux/rocketSlice');

const mockStore = configureStore([]);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        status: 'succeeded',
        error: null,
      },
    });
  });

  it(" it renders loading state", () => {
    store = mockStore({
      rockets: {
        status: "loading",
        error: null,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders error state', () => {
    store = mockStore({
      rockets: {
        status: 'failed',
        error: 'Test Error',
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
