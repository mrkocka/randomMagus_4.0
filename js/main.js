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
  console.log('Super');
  document.querySelector(".licence").style.display = "flex";
}



XLicensButton.addEventListener("click", licensClose);

function licensClose(){
  document.querySelector(".licence").style.display = "none";

}







//--------------------------------------------------------------------------------------

//Az első generálás 

go.addEventListener("click", first );

function first (){
let location = document.getElementById("location").selectedIndex;
    console.log(location)

     if (location == 0) {
        document.querySelector(".lazyUser").style.display = "flex";
        console.log('Menny aludni!');
      }  
}