function generatePoem(event) {
  event.preventDefault();

  const input = document.querySelector("#user-instructions");
  const poemElement = document.querySelector("#poem");

  poemElement.innerHTML = "";

  new Typewriter(poemElement, {
    strings:
      "Chauffez au feu vos mains, chauffez à Dieu votre âme. Aimez, vivez.",
    autoStart: true,
    delay: 40,
    cursor: "",
  });

  console.log(input.value);
}

const form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatePoem);
