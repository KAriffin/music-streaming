const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results-list');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = musicData.filter((song) => {
        const title = song.title.toLowerCase();
        const artist = song.artist.toLowerCase();
        return title.includes(searchTerm) || artist.includes(searchTerm);
    });
    displayResults(filteredResults);
});

function displayResults(results) {
    resultsList.innerHTML = '';
    results.forEach((song) => {
        const li = document.createElement('li');
        const title = document.createElement('h2');
        const artist = document.createElement('p');
        const coverImage = document.createElement('img');
        title.textContent = song.title;
        artist.textContent = song.artist;
        coverImage.src = song.coverImage;
        coverImage.alt = `${song.title} by ${song.artist} cover image`;
        li.appendChild(coverImage);
        li.appendChild(title);
        li.appendChild(artist);
        resultsList.appendChild(li);
    });
}
