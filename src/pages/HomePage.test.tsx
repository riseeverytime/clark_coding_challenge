import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Test for <HomePage />', () => {
  const updatePage = jest.fn();
  const updateQuiz = jest.fn();

  it('sound render the HomePage', () => {
    render(<HomePage onUpdatePage={updatePage} onUpdateQuiz={updateQuiz} />);
    expect(screen.getByText('CAN YOU SCORE 100% ?')).toBeInTheDocument();
    expect(
      screen.getByText('Welcome to the Questionnaire!')
    ).toBeInTheDocument();
    expect(
      screen.getByText('You will be presented with 10 questions.')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'B e g i n' })
    ).toBeInTheDocument();
  });
});
