"use strict";

document.addEventListener("click", function (e) {
  e.preventDefault();
});

function namesValue() {
  var firstName = document.getElementById("first-name");
  var loverName = document.getElementById("lover-name");
  document.querySelector(".name-1").textContent = firstName.value;
  document.querySelector(".name-2").textContent = loverName.value;
  firstName.value = "";
  loverName.value = "";
}

function removeClass() {
  document.querySelector(".happy-valentine").classList.remove("hide");
  document.querySelector(".their-names").classList.remove("hide");
}

document.querySelector(".btn").addEventListener("click", function () {
  namesValue();
  removeClass();
});
