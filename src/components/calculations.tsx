import React, { useRef, useState } from 'react';

import '../style/calculations.css';

export interface IAppProps {}

export default function Calculator(props: IAppProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [mortgageAmount, setMortgageAmount] = useState<any>('');
  const [amortization, setAmortization] = useState<any>('');
  const [interestRate, setInterestRate] = useState<any>('');

  const [result, setResult] = useState<any>(0);

  const [showResult, setShowResult] = useState<boolean>(false);

  const calculationMortgage = (e: React.FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    const userAmount: number = parseFloat(mortgageAmount);
    const calculatedInterest: number = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments: number = parseFloat(amortization) * 12;
    const x: number = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (
      mortgageAmount != null &&
      amortization != null &&
      interestRate != null
    ) {
      setShowResult(true);
    }

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      setResult(monthlyPaymentCalculated);
    }
  };

  return (
    <div className='calculator-container'>
      <div className='header'>
        <div>Mortgage Calculator</div>
      </div>
      <form onSubmit={calculationMortgage}>
        <div className='calculator-options'>
          <label htmlFor='html'>Mortgage Amount</label>
          <input
            type='number'
            onChange={(e) => setMortgageAmount(e.target.value)}
            name='mortgageAmount'
            value={mortgageAmount.value}
            ref={inputRef}
            min={0}
            placeholder='Enter your amount'
            required
          />

          <label htmlFor='html'>Amortization</label>
          <input
            type='number'
            pattern='[0-9]*'
            onChange={(e) => setAmortization(e.target.value)}
            name='amortization'
            value={amortization.value}
            min={0}
            placeholder='Enter years of amortization'
            required
          />

          <label htmlFor='html'>Interest Rate</label>
          <input
            type='number'
            step={0.01}
            onChange={(e) => setInterestRate(e.target.value)}
            name='interestRate'
            value={interestRate.value}
            min={0}
            placeholder='Interest rate %'
            required
          />

          <button type='submit'>Calculate</button>
        </div>
      </form>
      {showResult && (
        <p data-testid='result'>Your monthly installment is: {result}</p>
      )}
    </div>
  );
}
