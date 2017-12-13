let beers = [];

const app = function () {
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}


const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}


const requestComplete = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
    populateList(beers);
}

const populateList = function(beers) {
   const ul = document.querySelector('#beer-list');
   beers.forEach(function(beer) {
     const liName = document.createElement('li');
     liName.innerText = beer.name;
     const liImage = document.createElement('li');
     liImage.innerText = "";
     const image = document.createElement('img');
      image.src = beer.image_url;
     // createImage(beer.url);
     // liImage.appendChild(image);
     // ul.appendChild(liName);
     // ul.appendChild(liImage);
    appendChildren(liName, liImage, image);
   });
 }

// const loopOverBeers = function(beers) {
//   // const ul = document.querySelector('#beer-list');
//   beers.forEach(function(beer){
//     return beer;
//   })
// }

// const createImage = function(url) {
//   const image = document.createElement('img');
//   image.src = url;
//   return image;
// }
//
// const createLi = function(text) {
//   const listItem = document.createElement('li');
//   listItem.innerText = text || '';
//   return listItem;
// }

const appendChildren = function(liName, liImage, image) {
 const ul = document.querySelector('#beer-list');
 ul.appendChild(liName);
 liImage.appendChild(image);
 ul.appendChild(liImage);
}


document.addEventListener('DOMContentLoaded', app);
