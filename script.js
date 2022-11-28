function navHamburger() {
  var x = document.getElementById("myLinks");
  // var x = document.getElementsByClassName("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let form = document.querySelector("#form");

// form.addEventListener("submit", handleSubmit);

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

  // console.log("======FORM SUBMISSION=====");
  console.log("EMAIL: " + email);
  console.log("COMPLIMENTS: " + message);
  console.log("Preference: " + preference);
}

async function injectHTML(filePath, elem) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      return;
    }
    const text = await response.text();
    elem.innerHTML = text;
    // reinject all <script> tags
    // for each <script> tag on injected html
    elem.querySelectorAll("script").forEach((script) => {
      // create a new empty <script> tag
      const newScript = document.createElement("script");
      // copy an attributes of existing script tag
      // to the new one
      Array.from(script.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      // inject content of existing script tag
      // to the new one
      newScript.appendChild(document.createTextNode(script.innerHTML));
      // replace existing script tag to the new one
      script.parentNode.replaceChild(newScript, script);
    });
  } catch (err) {
    console.error(err.message);
  }
}

injectHTML("./header.html", document.querySelector(".header"));
