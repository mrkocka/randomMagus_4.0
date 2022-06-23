//Lazy User function

let Xbutton = document.getElementById("closebutton");
let go = document.getElementById("goButton");

if (location == 0) {
  console.log("Jóó!");
}

Xbutton.addEventListener("click", close);

function close() {
  document.querySelector(".lazyUser").style.display = "none";
}

//-------------------------------------------------------------------------------------

// Licence function

let XLicensButton = document.getElementById("closebuttonLicens");
let infoButton = document.getElementById("js-ifnotButton");

infoButton.addEventListener("click", licensOpen);

function licensOpen() {
  console.log("Super");
  document.querySelector(".licence").style.display = "flex";
}

XLicensButton.addEventListener("click", licensClose);

function licensClose() {
  document.querySelector(".licence").style.display = "none";
}

//--------------------------------------------------------------------------------------

//Az első generálás

go.addEventListener("click", first);

function first() {
  let location = document.getElementById("location").selectedIndex;

  if (location === 0) {
    document.querySelector(".lazyUser").style.display = "flex";
    return;
  }
  if (location > 0)
    document.querySelector(".headerLogo").style.display = "none";
  document.querySelector("#MonsterCalc").style.display = "none";
  document.querySelector("#goButton").style.display = "none";
  document.querySelector(".footerText").style.display = "none";
  document.querySelector(".footerIcon").style.display = "none";
  document.querySelector(".creatingImg").style.display = "block";
  document.querySelector(".creatingStat").style.display = "block";
  document.querySelector("#MonsterCalc").style.display = "block";
  document.querySelector(".againButton").style.display = "flex";
}
