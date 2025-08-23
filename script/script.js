// Login button

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberConverted = parseInt(pinNumberValue);

  if (
    mobileNumberConverted === mobileNumber &&
    pinNumberConverted === pinNumber
  ) {
    window.location.href = "../home.html";
  } else {
    alert("Invalid Password");
  }
});
