const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();

const galerie = document.querySelector(".galerie");

projets.forEach((projet) => {
  const figure = document.createElement("figure");

  const image = document.createElement("img");
  image.src = projet.imageUrl;
  image.alt = projet.title;

  const caption = document.createElement("figcaption");
  caption.textContent = projet.title;

  figure.appendChild(image);
  figure.appendChild(caption);
  galerie.appendChild(figure);
});

console.log(
  "Projets récupérés :",
  projets.map((p) => p.title)
);
