// const API_KEY = 'API_KEY';
const accessKey = 'fkS4fcYdjDR-ZijxidFbP6XQ5J4EozvqCHeVM9qF84U';
const formEl = document.querySelector('form');  
const searchInputEl = document.getElementById('search-input');
const searchResultsEl = document.querySelector('.search-results');
const showMoreButton = document.getElementById("show-more-button");

let searchQuery = '';
let page = 1;
let currentSearch;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = searchInputEl.value;
    page = 1;
    search(searchQuery, page);
});