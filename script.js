'use strict';

const logoCard = document.querySelector('.card-gallery');
const logoJSON = './logos.json';
const search = document.querySelector('#search');

const getData = async () => {
  const res = await fetch(logoJSON);
  const data = await res.json();
  return data;
}

const displayLogos = async () => {
  let query = search.value;
  console.log("Query:", query);

  const payload = await getData();

  let dataDisplay = payload.filter((eventData) => {
    if (query === "") {return eventData}
    else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {return eventData}
  }).map((product) => {
    const {id, name, cover, description, resource} = product;

    return `
    <div class="card full" data-product-id="${id}">
      <div class="card__image">
        <img src="${cover}" alt="${description}">
      </div>
      <div class="card__desc b-white">
        <h3 class="card__name full">${name}</h3>
        <a class="btn-download b-black" href="${resource}" aria-label="Download the ${name} logo" download>
          <svg width="20" xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor"><g data-testid="icons / icon-download"><g class="fills"><rect rx="0" ry="0" width="20" height="20" class="frame-background"/></g><g data-testid="svg-path" class="frame-children"><defs><mask width="1.2" height="1.2" x="-.1" id="a" data-old-y="-.1" data-old-width="1.2" data-old-x="-.1" fill="#fff" y="-.1" data-old-height="1.2"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3v6.171L6.414 6.586 5 8l4 4 1 1v-.002V13L11 12l4-4-1.414-1.414L11 9.17V3H9Zm-6 8v6h14v-6h-2v4H5v-4H3Z" class="svg-mask-wrapper"/></mask></defs><path d="m9 9.171-.707.708L10 11.586V9.171H9ZM9 3V2H8v1h1ZM6.414 6.586l.707-.707-.707-.707-.707.707.707.707ZM5 8l-.707-.707L3.586 8l.707.707L5 8Zm4 4h1v-.414l-.293-.293L9 12Zm0 0H8v1h1v-1Zm0 0 .707-.707L9.414 11H9v1Zm.999.999-.707.707.708.708.707-.708-.708-.707Zm.001-.001.707-.706-.707-.708-.707.708.707.706Zm.001.001-.708.707.708.708.707-.708-.707-.707ZM11 12v-1h-.414l-.293.293L11 12Zm0 0v1h1v-1h-1Zm0 0-.707-.707-.293.293V12h1Zm4-4 .707.707.707-.707-.707-.707L15 8Zm-1.414-1.414.707-.707-.707-.707-.707.707.707.707ZM11 9.171h-1v2.415l1.707-1.707L11 9.171ZM11 3h1V2h-1v1Zm-8 8v-1H2v1h1Zm0 6H2v1h1v-1Zm14 0v1h1v-1h-1Zm0-6h1v-1h-1v1Zm-2 0v-1h-1v1h1Zm0 4v1h1v-1h-1ZM5 15H4v1h1v-1Zm0-4h1v-1H5v1Zm5-1.829V3H8v6.171h2ZM5.707 7.293l2.586 2.586 1.414-1.415-2.586-2.585-1.414 1.414Zm0 1.414 1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414Zm4 2.586-4-4-1.414 1.414 4 4 1.414-1.414ZM10 12ZH8h2Zm-1-1Zv2-2Zm1.706 1.292-.999-.999-1.414 1.414.999.999 1.414-1.414Zm-1.413 0Zl1.414 1.414v-.001l-1.414-1.413Zm0 1.413Zl1.415-1.413h-.001l-1.414 1.413Zm1.415.001.999-.999-1.414-1.414-.999.999 1.414 1.414ZM11 11Zv2-2Zm-1 1Zh2-2Zm1.707.707 4-4-1.414-1.414-4 4 1.414 1.414Zm4-5.414-1.414-1.414-1.414 1.414 1.414 1.414 1.414-1.414Zm-2.828-1.414-2.586 2.585 1.414 1.415 2.586-2.586-1.414-1.414ZM10 3v6.171h2V3h-2ZM9 4h2V2H9v2ZM4 16v-5H2v5h2Zm0 1v-1H2v1h2Zm0-1H3v2h1v-2Zm12 0H4v2h12v-2Zm1 0h-1v2h1v-2Zm-1 0v1h2v-1h-2Zm0-5v5h2v-5h-2Zm-1 1h2v-2h-2v2Zm1 3v-4h-2v4h2ZM5 16h10v-2H5v2Zm-1-5v4h2v-4H4Zm-1 1h2v-2H3v2Z" mask="url(#a)" class="svg-col"; fill-opacity: 1;" class="fills"/></g></g></svg>
        </a>
      </div>
    </div>
    `
  }).join("");
  
  logoCard.innerHTML = dataDisplay;
}
displayLogos();

search.addEventListener("input", () => {
  displayLogos();
});