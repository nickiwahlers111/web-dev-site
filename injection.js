// Function to inject HTML onto main document
//I included this so that the index.html could be just a series of divs
//this function allows me to modularize components and inject them to the main page
async function injectHTML(filePath, elem) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      return;
    }
    const text = await response.text();
    elem.innerHTML = text;
  } catch (err) {
    console.error(err.message);
  }
}

injectHTML("components/header.html", document.querySelector(".header"));
injectHTML("components/navbar.html", document.querySelector(".nav"));
injectHTML("components/aboutme.html", document.querySelector(".container"));
injectHTML("components/resume.html", document.querySelector(".resume"));
injectHTML(
  "components/projectcards.html",
  document.querySelector(".project-cards")
);
injectHTML("components/form.html", document.querySelector(".form-container"));
