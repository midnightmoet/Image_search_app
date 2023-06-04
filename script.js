const accessKey = 'fkS4fcYdjDR-ZijxidFbP6XQ5J4EozvqCHeVM9qF84U';
const formEl = document.querySelector('form');  
const searchInputEl = document.getElementById('search-input');
const searchResultsEl = document.querySelector('.search-results');
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
  inputData = searchInputEl.value;
  // console.log(inputData);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data); THIS TEST WITHIN THE CONSOLE WAS SUCCESSFUL!!!!!
  
    if(page === 1){
      searchResultsEl.innerHTML = "";
    }
  
  const results = data.results;
  
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank"
    imageLink.textContent = alt_description;
  } )
  
 
  if(page > 1){
    showMoreButton.style.display = block;
  }
  
  // console.log(results);  JUST USED THIS FOR TESTING IN CONSOLE. SUCCESSFUL!!!
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
    
});