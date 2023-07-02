function getPhotos(query) {
    const accessKey = "UtsiDge5BhkmpUg_IXiFiXGVUjotsoIf4wpYuHb8lkQ";
    const baseUrl = "https://api.unsplash.com";
    const endpoint = "/search/photos";
    var row = document.querySelector('.row');
  
    const url = `${baseUrl}${endpoint}?query=${query}`;
  
    const headers = {
      Authorization: `Client-ID ${accessKey}`,
    };
  
    fetch(url, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Process the response data
        row.innerHTML = '';
        data.results.forEach(photo => {
          console.log(photo);
          row.innerHTML += `<div class="card">
          <img src="${photo.urls.small}" class="photo">
          <h3>${photo.description || query.toUpperCase()}</h3>
          </div>`;
        });
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }
  
  // Example usage
  const searchQuery = document.querySelector('.txt');

function checkingenterkey(e){
  var digit = e.key
  if(digit == 'Enter'){
    getPhotos(searchQuery.value)
  }
}
