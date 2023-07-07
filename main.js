const shaharla = document.querySelector(".shaharla");
const searchInput = document.querySelector(".search-container input");
const qorafon = document.querySelector(".qorafon");
const regionName = document.getElementsByClassName('.regionName');
const regions = document.getElementsByClassName('.regions');
const region = document.querySelectorAll('.region');
const qidirish = document.querySelector('.qidirish')

let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);
    allCountriesData = data;
  });

function renderCountries(data) {
  shaharla.innerHTML = "";
  data.forEach((country) => {
    const shaharlaCard = document.createElement("a");
    shaharlaCard.classList.add("country-card");
    shaharlaCard.setAttribute('href', `country.html?name=${country.name.common}`)
    shaharlaCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common} flag" />
          <div class="card-text"><a>
              <h2 class="card-title">${country.name.common}<a"></a></h2>
              <p><a>Population:${country.population.toLocaleString("en-IN")}</a></p>
              <p class="regionName"></a>Region: ${country.region}</a></p>
              <p><a>Capital: ${country.capital?.[0]}</a></p></a>
          </div>`;
    shaharla.append(shaharlaCard);
  });
}


qorafon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


qidirish.addEventListener("input", (e) => {
  const filteredCountries = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCountries(filteredCountries);
});

// regions.addEventListener("change", (e) => {
//   fetch(`https://restcountries.com/v3.1/region/${regions.value}`)
//     .then((res) => res.json())
//     .then(renderCountries);
// });

regions.addEventListener("change", (e) => {
  fetch('https://restcountries.com/v3.1/region/${options.value}')
    .then((res) => res.json())
    .then(renderCountries);
});