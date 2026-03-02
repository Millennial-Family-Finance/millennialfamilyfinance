function calculateBudget() {
    let income = document.getElementById("income").value;
    let needs = income * 0.5;
    let wants = income * 0.3;
    let savings = income * 0.2;

    document.getElementById("budgetResults").innerHTML =
        `Needs: $${needs.toFixed(2)} <br>
         Wants: $${wants.toFixed(2)} <br>
         Savings: $${savings.toFixed(2)}`;
}

function calculateMortgage() {
    let P = parseFloat(document.getElementById("loanAmount").value);
    let r = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    let n = parseFloat(document.getElementById("loanYears").value) * 12;

    let monthlyPayment = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    document.getElementById("mortgageResults").innerHTML =
        `Monthly Payment: $${monthlyPayment.toFixed(2)}`;

    generateAmortization(P, r, n, monthlyPayment);
}

function generateAmortization(P, r, n, payment) {
    let balance = P;
    let table = "<table border='1'><tr><th>Month</th><th>Principal</th><th>Interest</th><th>Balance</th></tr>";

    for (let i = 1; i <= n; i++) {
        let interest = balance * r;
        let principal = payment - interest;
        balance -= principal;

        table += `<tr>
                    <td>${i}</td>
                    <td>$${principal.toFixed(2)}</td>
                    <td>$${interest.toFixed(2)}</td>
                    <td>$${balance.toFixed(2)}</td>
                  </tr>`;
    }

    table += "</table>";
    document.getElementById("amortizationTable").innerHTML = table;
}

<script>
function calculateInvestment() {
  const principal = parseFloat(document.getElementById("investmentAmount").value) || 0;
  const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value) || 0;
  const annualReturn = parseFloat(document.getElementById("annualReturn").value) || 0;
  const years = parseFloat(document.getElementById("years").value) || 0;

  const monthlyRate = annualReturn / 100 / 12;
  const totalMonths = years * 12;

  let futureValue = principal;

  for (let i = 0; i < totalMonths; i++) {
    futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate);
  }

  document.getElementById("investmentResults").innerHTML = `
    <h3>Estimated Future Value</h3>
    <p><strong>$${futureValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}</strong></p>
    <p><em>Based on monthly contributions and compound growth.</em></p>
  `;
}
</script>
