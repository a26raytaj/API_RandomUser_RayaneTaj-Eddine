document.getElementById("actualitzar").addEventListener("click", function() {

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("bitcoin").innerHTML = data.bpi.EUR.rate + " €";
        });

});

document.getElementById("novaBroma").addEventListener("click", function() {

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("broma").innerHTML = data.value;
        });

});

document.getElementById("nouUsuari").addEventListener("click", function() {

    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            let usuari = data.results[0];

            document.getElementById("usuari").innerHTML = `
                ${usuari.name.first}<br>
                ${usuari.name.last}<br>
                <img src="${usuari.picture.large}"><br>
                ${usuari.phone}
            `;
        });

});