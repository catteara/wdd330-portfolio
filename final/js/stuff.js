function stuff() {
    event.preventDefault();

    if (document.getElementById('equipment').checked) {
        var requestURL = `https://www.dnd5eapi.co/api/equipment`;

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                var next = jsonObject["results"];
                var random = Math.floor(Math.random() * next.length);
                document.getElementById("equipmentResult").innerHTML = "Equipment: " + next[random].name;
            })
    } else {
        document.getElementById("equipmentResult").innerHTML = " ";
    }

    if (document.getElementById('magic-items').checked) {
        var requestURL = `https://www.dnd5eapi.co/api/magic-items`;

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                var next = jsonObject["results"];
                var random = Math.floor(Math.random() * next.length);
                document.getElementById("magic-itemsResult").innerHTML = "Magic Item: " + next[random].name;
            })
    } else {
        document.getElementById("magic-itemsResult").innerHTML = " ";
    }

    if (document.getElementById('spells').checked) {
        var requestURL = `https://www.dnd5eapi.co/api/spells`;

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                var next = jsonObject["results"];
                var random = Math.floor(Math.random() * next.length);
                document.getElementById("spellsResult").innerHTML = "Spell Scroll: " + next[random].name;
            })
    } else {
        document.getElementById("spellsResult").innerHTML = " ";
    }
    // } 
};