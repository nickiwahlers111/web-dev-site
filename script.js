function navHamburger() {
  var x = document.getElementById("myLinks");
  // var x = document.getElementsByClassName("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


let form = document.querySelector("#form")

// form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  // event.preventDefault();
  console.log("linked!")
  var email = document.getElementById('inputEmail3').value;
  // var message= document.getElementById('exampleFormControlTextarea1').value;
  
  // console.log("======FORM SUBMISSION=====");
  console.log("EMAIL: "+email);
  // console.log("MESSAGE: " + message);


}
