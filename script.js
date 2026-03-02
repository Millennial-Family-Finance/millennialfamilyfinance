function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  document.getElementById("budgetResults").innerHTML = `
    <p>Needs (50%): $${(income * 0.5).toFixed(2)}</p>
    <p>Wants (30%): $${(income * 0.3).toFixed(2)}</p>
    <p>Savings (20%): $${(income * 0.2).toFixed(2)}</p>
  `;
}

function calculateMortgage() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const annualRate = parseFloat(document.getElementById("interestRate").value);
  const years = parseInt(document.getElementById("loanYears").value);

  if (!loan || !annualRate || !years) return;

  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;

  const monthlyPayment =
    loan * monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  document.getElementById("mortgageResults").innerHTML =
    `<p><strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}</p>`;

  let balance = loan;
  let table = `
    <table border="1" cellpadding="6">
      <tr>
        <th>Month</th>
        <th>Payment</th>
        <th>Principal</th>
        <th>Interest</th>
        <th>Balance</th>
      </tr>
  `;

  for (let month = 1; month <= totalPayments; month++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    table += `
      <tr>
        <td>${month}</td>
        <td>$${monthlyPayment.toFixed(2)}</td>
        <td>$${principal.toFixed(2)}</td>
        <td>$${interest.toFixed(2)}</td>
        <td>$${Math.max(balance, 0).toFixed(2)}</td>
      </tr>
    `;
  }

  table += `</table>`;
  document.getElementById("amortizationTable").innerHTML = table;
}

function calculateInvestment() {
  const principal = parseFloat(document.getElementById("investmentAmount").value) || 0;
  const monthly = parseFloat(document.getElementById("monthlyContribution").value) || 0;
  const rate = parseFloat(document.getElementById("annualReturn").value) / 100 / 12 || 0;
  const months = parseFloat(document.getElementById("years").value) * 12 || 0;

  let total = principal;
  for (let i = 0; i < months; i++) {
    total = (total + monthly) * (1 + rate);
  }

  document.getElementById("investmentResults").innerHTML =
    `<p><strong>Estimated Future Value:</strong> $${total.toFixed(2)}</p>`;
}
