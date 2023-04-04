function loadContent(file) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      console.warn(error);
    });

  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
    if (navLinks[i].id === file.split(".")[0]) {
      navLinks[i].classList.add("active");
    }
  }
}

// Do these on page load
loadContent("about.html");
