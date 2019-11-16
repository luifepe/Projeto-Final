const search_text = document.querySelector("#search-box input[type=search]");
const search_button = document.querySelector("#search-box button");
let giphy_data = {};

search_button.addEventListener('click', searchGiphy);
function searchGiphy() {
    let search_str = "https://api.giphy.com/v1/gifs/search?api_key=YD3rl82lkxKwEw7zVy7zeexH9nm7uxYI&q=" + encodeURI (search_text.value);
    console.log(search_str);
    search_text.value = "";

    fetch(search_str).then((response) => response.json()).then((data) => {
        giphy_data = data.data[1]
        updateInfo();
    });
}
function updateInfo() {
    const giphy_title = document.querySelector("#giphy h2");
    const giphy_media = document.querySelector("#giphy img");

    giphy_title.textContent = giphy_data.title;
    giphy_media.src = giphy_data.images.original.url;
}


