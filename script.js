//nav bar functionality display
function navHamburger() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let form = document.querySelector("#form");

//function to print form submission to console

function handleSubmit(event) {
  // Add your code here
  event.preventDefault();
  console.log("linked!");
  var email = document.getElementById("inputEmail3").value;
  var message = document.getElementById("exampleFormControlTextarea1").value;
  var preference = "";
  if (document.getElementById("gridRadios1").checked) {
    preference = "They liked the site";
  } else if (document.getElementById("gridRadios2").checked) {
    preference = "They loved the site";
  } else {
    preference = "No preference";
  }

  console.log("EMAIL: " + email);
  console.log("COMPLIMENTS: " + message);
  console.log("Preference: " + preference);
}
