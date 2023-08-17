"use strict";

const btnContainer = document.querySelector(".tip__btn-box-btns");
const btns = document.querySelectorAll(".btn");
const inputBill = document.getElementById("bill-amount");
const inputPeople = document.getElementById("num-people");
const customInput = document.querySelector(".tip__custom");
const tipAmount = document.querySelector(".calculation__amount");
const totalAmount = document.querySelector(".calculation__total");
const btnReset = document.querySelector(".calculation__btn");
const inputError = document.querySelector(".label__container-error");

function updateAmounts(tipValue) {
  const billAmount = +inputBill.value;
  const peopleAmount = +inputPeople.value;

  if (!inputPeople.value) {
    inputError.style.display = "block";
    inputPeople.style.outlineColor = "#fb4646";
  } else {
    inputError.style.display = "none";
    inputPeople.style.outlineColor = "";
  }

  const tipPerPerson = (tipValue * billAmount) / peopleAmount;
  const totalPerPerson = tipPerPerson + billAmount / peopleAmount;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Tip selector button
btnContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  btns.forEach((btn) => btn.classList.remove("btn--active"));
  btn.classList.add("btn--active");

  const tipValue = +btn.dataset.tipValue;
  updateAmounts(tipValue);
});

customInput.addEventListener("input", function () {
  const customTipValue = +customInput.value / 100;
  updateAmounts(customTipValue);
});

// Reset button
btnReset.addEventListener("click", function (e) {
  tipAmount.textContent = `$0.00`;
  totalAmount.textContent = `$0.00`;
  customInput.value = "";
});
