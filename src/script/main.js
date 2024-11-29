const inputs = document.querySelectorAll(".inputs");

const selectElement = document.getElementById("position");
let listPlayers = [];
let arrayInputs = Array.from(inputs);

function add() {
  let values = {};
  arrayInputs.forEach((input) => {
    values[input.name] = input.value;
  });
  listPlayers.push(values);

  localStorage.setItem("players", JSON.stringify(listPlayers));

  arrayInputs.forEach((input) => {
    input.value = "";
  });

  inputs.forEach(input => {
      const value = input.value;
      const type = input.name;

      switch (type) {
          case 'name':
              if (!validateName(value)) {
                  input.setCustomValidity('Name invalide');
              } else {
                input.setCustomValidity('');
                //   updateUserName(value);
              }
              break;
          case 'photo':
              if (!validatePhoto(value)) {
                  input.setCustomValidity('Valeur numérique invalide');
              } else {
                //   updateUserNumber(value);
              }
              break;
          // ...
      }
  });

  // function validateName(name) {

  // }

  // function validateNumber(number) {

  // }

  // function updateUserEmail(email) {

  // }

  // function updateUserNumber(number) {

  // }
  // document.querySelector("span").innerHTML = ''

  // if (input.value === "") {
  //     document.querySelector("span").innerHTML += 'chomp obligatoir';
  // }
  // else {
  //     document.querySelector("span").innerHTML = '';
  // }
  // })
}

function handleSelectChange() {
  let labels = document.querySelectorAll(".label");
  arrayLabel = Array.from(labels);
  formationGK = [
    "rating",
    "diving",
    "handling",
    "kicking",
    "reflexes",
    "speed",
    "positioning",
  ];
  formationJoueurs = [
    "rating",
    "pace",
    "shooting",
    "passing",
    "dribbling",
    "defending",
    "physical",
  ];
  const labelt = arrayLabel.map(label => label);
  const inputsFormation = Array.from(document.querySelectorAll(".formation .inputs"));
  console.log(inputsFormation)
  const arrayInput = inputsFormation.map(input =>  input);

  if (selectElement.value == "Goal Keeper (GK)") {
    for (let i = 1; i < labelt.length; i++) {
      labelt[i].setAttribute("for", formationGK[i]);
      labelt[i].innerText = formationGK[i];
      arrayInput[i].setAttribute("id", formationGK[i]);
      arrayInput[i].setAttribute("name", formationGK[i]);
      arrayInput[i].setAttribute("placeholder", formationGK[i]);
    }
  }
  else{
    for (let i = 1; i < labelt.length; i++) {
        labelt[i].setAttribute("for", formationJoueurs[i]);
        labelt[i].innerText = formationJoueurs[i];
        arrayInput[i].setAttribute("id", formationJoueurs[i]);
        arrayInput[i].setAttribute("name", formationJoueurs[i]);
        arrayInput[i].setAttribute("placeholder", formationJoueurs[i]);
      }
  }
  
}

selectElement.addEventListener("change", handleSelectChange);
