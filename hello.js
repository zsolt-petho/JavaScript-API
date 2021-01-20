document
  .querySelector("form")
  .addEventListener("submit", function fgvny1(lekérdez) {
    lekérdez.preventDefault();

    const orszag = document.querySelector("[name=orszag]").value;
    const szezon = document.querySelector("[name=szezon]").value;

    fetch(
      `https://raw.githubusercontent.com/openfootball/football.json/master/${szezon}/${orszag}.1.clubs.json`
    )
      .then((result) => result.json())
      .then((data) => {
        const bajnoksag = data.name;
        document.querySelector(".js-fejlec").innerHTML = bajnoksag;

        const csapatLista = data.clubs;
        const markup = csapatLista
          .map(
            (csapatok) => `
            <li class="csapat">) ${csapatok.name}</li>
            `
          )
          .sort()
          .join("");
        document.querySelector(".js-csapatok").innerHTML = markup;
      });
  });