function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  document.getElementById("budgetResults").innerHTML = `
    <p>Needs (50%): $${(income * 0.5).toFixed(2)}</p>
    <p>Wants (30%): $${(income * 0.3).toFixed(2)}</p>
    <p>Savings (20%): $${(income * 0.2).toFixed(2)}</p>
  `;
}

function calculateMortgage() {
  const loan = parseFloat(document.getElementById("loanAmount").value) || 0;
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12 || 0;
  const years = parseFloat(document.getElementById("loanYears").value) * 12 || 0;

  const payment = loan * rate / (1 - Math.pow(1 + rate, -years));
  document.getElementById("mortgageResults").innerHTML =
    `<p>Monthly Payment: $${payment.toFixed(2)}</p>`;
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
    `<p><strong>Estimated Value: $${total.toFixed(2)}</strong></p>`;
}
