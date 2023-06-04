import { render, screen } from '@testing-library/react';

import FinishPage from './FinishPage';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Test for <FinishPage />', () => {
  it('sound render the FinishPage', () => {
    render(<FinishPage />);
    expect(
      screen.getByText('Congratulations. Do you want to restart?')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Restart' })).toBeInTheDocument();
  });
});
