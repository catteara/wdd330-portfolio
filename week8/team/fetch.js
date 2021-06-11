const list = document.getElementById("pokemonData")
const prevB = document.getElementById("prev")
const nextB = document.getElementById("next")
var pageURLnext = "";
var pageURLprev = "";
var pagelist = 0;
var navi = document.getElementById("navigate");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then((data) => {
        pagelist = (Math.ceil(data.count))
        for (let i = 1; i <= pagelist; i = i + 20) {
            var num = document.createElement("input")
            num.setAttribute("type", "button");
            num.setAttribute("value", i);
            navi.appendChild(num)
            num.addEventListener('click', () => fetchData(`https://pokeapi.co/api/v2/pokemon/?offset=${i}`), false)
        }
    });

fetchData("https://pokeapi.co/api/v2/pokemon/")

function fetchData(fetchURL) {
    list.innerHTML = "";
    if (fetchURL !== null) {
        fetch(fetchURL)
            .then(response => response.json())
            .then((data) => {
                let obj = Object.entries(data.results);
                pageURLnext = data.next;
                pageURLprev = data.previous;
                obj.forEach(item => {
                    let lItem = document.createElement("li");
                    lItem.textContent = item[1].name;
                    list.appendChild(lItem);
                })
            })
    } else {
        var lItem = document.createElement("li");
        lItem.textContent = "No items found";
        list.appendChild(lItem);
    }
}
prevB.addEventListener('click', () => fetchData(pageURLprev), false);
nextB.addEventListener('click', () => fetchData(pageURLnext), false);

