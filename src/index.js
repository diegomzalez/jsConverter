function converter () {
        const result = document.getElementById("inputAmount").value / document.getElementById("inputCurrency").value;
        document.getElementById("displayResult").innerText = `$${result.toFixed(2)}`;
};
