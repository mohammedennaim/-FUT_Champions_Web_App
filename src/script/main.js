const inputs = document.querySelectorAll('.inputs');
let listPlayers = []
let arrayInputs = Array.from(inputs);
function add() {
    let values = {};
    arrayInputs.forEach(input => {
        values[input.name] = input.value; 
    })
    listPlayers.push(values)
    localStorage.setItem("players",  JSON.stringify(listPlayers))
}

