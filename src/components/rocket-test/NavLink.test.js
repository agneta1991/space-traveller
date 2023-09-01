import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../NavLink';

describe('Header Component', () => {
  it('displays the correct navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    const profileLink = screen.getByText('Profile');

    expect(rocketsLink).toMatchSnapshot();
    expect(missionsLink).toMatchSnapshot();
    expect(profileLink).toMatchSnapshot();
  });
});
