function navHamburger() {
  var x = document.getElementById("myLinks");
  // var x = document.getElementsByClassName("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}