document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const amountToAdd = parseInt(
      document.getElementById("ammount-to-add").value
    );
    const pinToWithdraw = document.getElementById("pin-to-withdraw").value;

    const accountBalance = parseInt(
      document.getElementById("account-balance").innerText
    );

    const totalNewBalance = amountToAdd + accountBalance;

    document.getElementById("account-balance").innerText = totalNewBalance;
  });
