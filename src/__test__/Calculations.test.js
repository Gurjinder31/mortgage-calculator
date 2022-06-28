import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Calculator from '../components/calculations';

// Three test case written for different values based on input

// TEST CASE 1
it('Show result value of calculations test1', () => {
  render(<Calculator />);

  const mortgageAmount = 1000000;
  const amortization = 25;
  const interestRate = 4.5;

  fireEvent.change(screen.getByPlaceholderText(/Enter your amount/i), {
    target: { value: mortgageAmount },
  });

  fireEvent.change(
    screen.getByPlaceholderText(/Enter years of amortization/i),
    {
      target: { value: amortization },
    }
  );
  fireEvent.change(screen.getByPlaceholderText(/Interest rate %/i), {
    target: { value: interestRate },
  });

  const buttonElement = screen.getByRole('button', { name: /Calculate/i });
  fireEvent.click(buttonElement);

  const resultValue = screen.getByTestId('result');
  expect(resultValue.textContent).toBe('Your monthly installment is: 5558.32');
});

// TEST CASE 2
it('Show result value of calculations test2', () => {
  const mockCalculationResult = jest.fn();

  render(<Calculator />);

  const mortgageAmount = 2000000;
  const amortization = 25;
  const interestRate = 3.5;

  fireEvent.change(screen.getByPlaceholderText(/Enter your amount/i), {
    target: { value: mortgageAmount },
  });

  fireEvent.change(
    screen.getByPlaceholderText(/Enter years of amortization/i),
    {
      target: { value: amortization },
    }
  );
  fireEvent.change(screen.getByPlaceholderText(/Interest rate %/i), {
    target: { value: interestRate },
  });

  const buttonElement = screen.getByRole('button', { name: /Calculate/i });
  fireEvent.click(buttonElement);

  const resultValue = screen.getByTestId('result');
  expect(resultValue.textContent).toBe('Your monthly installment is: 10012.47');
});

// TEST CASE 3
it('Show result value of calculations test3', () => {
  const mockCalculationResult = jest.fn();

  render(<Calculator />);

  const mortgageAmount = 2500000;
  const amortization = 25;
  const interestRate = 2.5;

  fireEvent.change(screen.getByPlaceholderText(/Enter your amount/i), {
    target: { value: mortgageAmount },
  });

  fireEvent.change(
    screen.getByPlaceholderText(/Enter years of amortization/i),
    {
      target: { value: amortization },
    }
  );
  fireEvent.change(screen.getByPlaceholderText(/Interest rate %/i), {
    target: { value: interestRate },
  });

  const buttonElement = screen.getByRole('button', { name: /Calculate/i });
  fireEvent.click(buttonElement);

  const resultValue = screen.getByTestId('result');
  expect(resultValue.textContent).toBe('Your monthly installment is: 11215.42');
});
