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

// CASH OUT SECTION

document.getElementById("cashout-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-account-number").value;
  const amountToMinus = parseInt(
    document.getElementById("amount-to-cashout").value
  );
  const pinToCashout = document.getElementById("pin-to-cashout").value;

  const accountBalance = parseInt(
    document.getElementById("account-balance").innerText
  );

  const totalNewBalance = accountBalance - amountToMinus;

  document.getElementById("account-balance").innerText = totalNewBalance;

  if (amountToMinus > accountBalance) {
    alert(" You don’t have enough balance to cash!");
    return; // stop execution
  }
});

// TOGGLING FEATURE

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("transfer-parent").style.display = "none";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block";
    document.getElementById("transfer-parent").style.display = "none";
  });

// TOGGLING FAETURE FOR TRANSFER MONEY

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "block";
  });

// BUTTON SELECTED
const addBtn = document.getElementById("add-button");
const cashOutBtn = document.getElementById("cash-out-button");
const transferBtn = document.getElementById("transfer-money-button");

addBtn.addEventListener("click", function () {
  addBtn.classList.add("selected");
  cashOutBtn.classList.remove("selected");
  transferBtn.classList.remove("selected");
});

cashOutBtn.addEventListener("click", function () {
  cashOutBtn.classList.add("selected");
  addBtn.classList.remove("selected");
  transferBtn.classList.remove("selected");
});

transferBtn.addEventListener("click", function () {
  cashOutBtn.classList.remove("selected");
  addBtn.classList.remove("selected");
  transferBtn.classList.add("selected");
});
