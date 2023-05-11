
const x = document.getElementsByClassName("batsmen");
console.log(x)
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 'I will repeat again: ' + y[0].innerHTML;

// let bestSpinner = document.getElementById("bestSpinner")
// bestSpinner.addEventListener("mouseover", function run(){
//     alert("you are about to see the spin god!")
//     bestSpinner.removeEventListener("mouseover",run)
// })


function toggleHide(){
  let btn = document.getElementById("btn");
  let bestSpinner = document.getElementById("bestSpinner");
  let bestspinnerImage = document.getElementById("shane_warne");
  console.log(bestSpinner)
  if(bestSpinner.style.display == "none"){
    bestSpinner.style.display = "block";
    bestspinnerImage.style.display = "block";
  }
  else{
    bestSpinner.style.display = "none";
    bestspinnerImage.style.display = "none";
  }
}