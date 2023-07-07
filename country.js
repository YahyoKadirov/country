const countryName = new URLSearchParams(location.search).get("name");
const infoCountry = document.querySelector(".information");
// const searchInput = document.querySelector(".search__input");
const darkMode = document.querySelector(".dark__mode");
// const body = document.querySelector("body");
// const filterByRegion = document.querySelector(".filter__region ");
// const onPage = document.querySelector(".page");
const wrap = document.querySelector(".wrap");
const countryCard = document.querySelector(".country-card");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    showCountries(data);
    allCountriesData = data;
  });



darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
});


function showCountries(data) {
    data.filter((item) => {
     const showPage = document.createElement('div')
     showPage.classList.add('show__content')
     showPage.innerHTML = `<div class="show__item"><img class="showImg" src="${item.flags.svg}" alt="${item.name.common} flag" width = "500" height = "300" /></div>
     <div>
     <div class="div__item">
     <h1>${item.name.common}</h1>
     <p><strong>Native Name:</strong><strong>${item.name.common}</strong></p>
     <p><strong>Sub Region:</strong>${item.population}</p>
     <p><strong>Population:</strong><strong>${item.population}</strong></p>
     <p><strong>Region:</strong><strong>${item.region}</strong></p>
     <p><strong>Capital:${item.capital}</strong></p>
     </div>
     </div>`
     wrap.innerHTML = wrap.innerHTML + showPage.innerHTML
    });
  }
  
qorafon.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
});

