var register = document.querySelector(".registerForm");
register.onsubmit = function (e) {
  e.preventDefault();
  var amount = document.querySelector(".amount").value;
  var exchange = document.querySelector(".exchange").value;
  var dollarAmount = amount * 3.68;
  var dinarAmount = amount * 5.19;
  var nisAmount = amount;

  if (exchange == "dollar") {
    document.querySelector(".result").innerHTML = dollarAmount;
  }

  if (exchange == "dinar") {
    document.querySelector(".result").innerHTML = dinarAmount;
  }

  if (exchange == "nis") {
    document.querySelector(".result").innerHTML = nisAmount;
  }
};
