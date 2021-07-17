// function stuff() {
// const requestURL = 'https://api.open5e.com';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject); 
    // var stuffs = ["magicitems", "spells", "weapons"];
    // var numbers = ["239", "322", "38"];
    // let i = 0;
    // while ( i <= stuffs.length) {
//         if (document.getElementById(stuffs[i]).checked ) {
//             var link = jsonObject[stuffs[i]];
//             var random = Math.floor(Math.random() * numbers[i]);
//             document.getElementById(stuffs[i]+'Result').innerHTML = link.results[random].name;
//             i++;
//         } else {
//             document.getElementById(stuffs[i]+'Result').innerHTML = '';
//             i++;
//         }
//   }
// })
// if (document.getElementById(magicitems.checked)){
//     var link = jsonObject[magicitems];
//     var random = Math.floor(Math.random() * 239);
//     document.getElementById('magicitemsResult').innerHTML = link.results[random].name;
//     i++;
// }})
// };

function stuff() {
    event.preventDefault();

    var stuffs = ["magicitems", "spells", "weapons"];
    var i = 0;
    
    while ( i <= stuffs.length) {
    var numbers = ["239", "322", "38"];

    const link = stuffs[i];
    const requestURL = `https://www.dnd5eapi.co/api/${link}/`;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);
            
    
            if (document.getElementById(stuffs[i]).checked ) {
                var next = jsonObject['results'];
                var random = Math.floor(Math.random() * numbers[i]);
                document.getElementById(stuffs[i]+'Result').innerHTML = next[random].name;
                i++;
            } else {
                document.getElementById(stuffs[i]+'Result').innerHTML = '';
                i++;
            }
      })
    }
};