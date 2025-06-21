import React, { useState, useEffect } from "react";
import "./EMICalculator.css";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(16000000);
  const [interestRate, setInterestRate] = useState(4);
  const [tenureYears, setTenureYears] = useState(8);

  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenureYears]);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenureYears * 12;

    const emiCalc = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    const totalAmt = emiCalc * N;
    const totalInt = totalAmt - P;

    setEmi(emiCalc.toFixed(2));
    setTotalPayment(totalAmt.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
  };

  const pieData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#d9534f", "#f0ad4e"],
      },
    ],
  };

  return (
    <div className="emi-wrapper">
      <h2 className="emi-title">Calculate Home Loan EMI</h2>
      <p className="emi-subtext">
        Use our Home Loan EMI Calculator to get your loan plan!
      </p>

      <div className="emi-calculator">
        <div className="emi-inputs">
          <label>Loan Amount</label>
          <input
            type="range"
            min="100000"
            max="100000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <p>₹ {loanAmount}</p>

          <label>Interest Rate (% p.a.)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
          />
          <p>{interestRate} %</p>

          <label>Tenure (in years)</label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={tenureYears}
            onChange={(e) => setTenureYears(+e.target.value)}
          />
          <p>{tenureYears} years</p>
        </div>

        <div className="emi-chart">
          <Pie data={pieData} />
          <p><strong>Principal:</strong> ₹ {loanAmount.toLocaleString()}</p>
          <p><strong>Interest:</strong> ₹ {parseFloat(totalInterest).toLocaleString()}</p>
          <p><strong>Total:</strong> ₹ {parseFloat(totalPayment).toLocaleString()}</p>
        </div>
      </div>

      <div className="emi-output">
        Your Monthly EMI is: ₹ <strong>{emi}</strong>
      </div>
    </div>
  );
};

export default EMICalculator;
