
const requestURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        if(jsonObject.previous != null) {
            let button2 = document.createElement('button');
            let a2 = document.createElement('a');
    
            a2.textContent = "Previous";
            a2.href = jsonObject.previous;
    
            button2.appendChild(a2);
            
            document.querySelector('div.buttons').appendChild(button2);

        }

        let button1 = document.createElement('button');
        let a1 = document.createElement('a');

        a1.textContent = "Next";
        a1.href = jsonObject.next;

        button1.appendChild(a1);
        
        document.querySelector('.buttons').appendChild(button1);

        for (let i = 0; i < jsonObject.results.length; i++) {
            let container = document.createElement('ul');
            let li = document.createElement('li');

           li.textContent = jsonObject.results[i].name;

            container.appendChild(li);

            document.querySelector('div.containers').appendChild(container);
        }

        
          
    });