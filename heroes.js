async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateheroes(superHeroes);
}

//function to populate header
function populateHeader(obj) {
  const header = document.querySelector("header");
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header-class");
  const myHeader = document.createElement("h1");
  myHeader.textContent = obj.squadName;
  headerDiv.appendChild(myHeader);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

  headerDiv.appendChild(myPara);
  header.appendChild(headerDiv);
}

//creating hero information cards
function populateheroes(obj) {
  const section = document.querySelector("section");
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("container");

  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    sectionDiv.appendChild(myArticle);
    section.appendChild(sectionDiv);
  }
}
populate();
