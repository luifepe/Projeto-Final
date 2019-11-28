const search_text = document.querySelector("#search-box input[type=search]");
const search_button = document.querySelector("#search-box2 button");
let giphy_data = {};
let proxima_gif = 0;
const APIKEY = 'YD3rl82lkxKwEw7zVy7zeexH9nm7uxYI';

search_button.addEventListener('click', searchGiphy);
search_text.addEventListener('keyup', (event) => (event.key == 'Enter') ? searchGiphy ():null);


function searchGiphy() {
    console.log
    //console.log("Começou a pesquisa:" +proxima_gif)
    window.removeEventListener('scroll', endOfPage)

    let search_str = "https://api.giphy.com/v1/gifs/search?api_key=YD3rl82lkxKwEw7zVy7zeexH9nm7uxYI&offset="+ proxima_gif +"&q=" + encodeURI (search_text.value);
    console.log(search_str);
    // search_text.value = "";

    fetch(search_str).then((response) => response.json()).then((data) => {
        giphy_data = data.data;
        console.log(data);
        giphy_data.forEach(carrega_gif);
      
    });

    proxima_gif+= 25;
    window.addEventListener('scroll', endOfPage);
}

// ------------------------------------------------------------------ funcion scroll infinito + funcion detectar final de la pagina

function carrega_gif (value, index,array){
    //var gif_title = document.createElement ("h2");
    var gif_media = document.createElement("img");
   
    //gif_title.textContent = value.title;
    gif_media.src = value.images.original.url;
    
    const gif_infinito = document.querySelector("#gif-infinito");
    //gif_infinito.appendChild(gif_title);
    gif_infinito.appendChild(gif_media);
    

    console.log(value);
}



function endOfPage() {
    console.log((window.innerHeight + window.pageYOffset ) , document.body.offsetHeight)
    if ((window.innerHeight + window.pageYOffset ) >= document.body.offsetHeight) {
       // console.log("Chegou no fim")
        searchGiphy();
    }
}

// --------------------------------------------------------------------------titulo dinamico

const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

// ------------------------------------------------------------------fin titulo dinamico






