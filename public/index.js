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
}

document.addEventListener('DOMContentLoaded', app);
