let balance = 1000;
let betAmount = 100;

function bet(odds) {
  if (balance < betAmount) {
    alert("Low balance");
    return;
  }

  balance -= betAmount;

  // Random win or lose
  let win = Math.random() < 0.5;

  if (win) {
    let winMoney = betAmount * odds;
    balance += winMoney;
    document.getElementById("result").innerText =
      "WIN! +" + winMoney.toFixed(0);
  } else {
    document.getElementById("result").innerText =
      "LOSE! -" + betAmount;
  }

  document.getElementById("balance").innerText = balance.toFixed(0);
}
