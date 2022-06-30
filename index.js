const answer = document.querySelector(`h2.answer`);
const buttons = document.querySelectorAll(`.btn`);
const divHistorique = document.getElementById(`historique`);

//fonction de calcule et met à jour l'historique
function calc(){
    let p = document.createElement(`p`);
    let newCalc = answer.textContent;
    answer.textContent = eval(answer.textContent);
    newCalc += ` = ${answer.textContent}`;
    p.innerHTML = newCalc;
    divHistorique.prepend(p);
}

buttons.forEach((button) => {
    button.addEventListener(`click`, (e) => {
        answer.textContent += e.target.value;
    });
});

// Réaliser le calcul
equal.addEventListener(`click`, () => {
    calc();
});

clear.addEventListener(`click`, () => {
    answer.textContent = "";
});

// gérer le suppr, effacer et entrée pour equal
document.addEventListener(`keydown`, (e) => {
    let keyDown = e.code;
    if (keyDown == "Delete"){
        answer.textContent = "";
    }else if (keyDown == "Backspace") {
        answer.textContent = answer.textContent.substring(0, answer.textContent.length - 1);
    }
});


//capter les touches clavier
document.addEventListener(`keypress`, (e) => {
    let keyPress = e.key;

    //Réaliser le calcul avec Enter
    if (keyPress == "Enter") {
        calc();
    }

    //capter les symboles opérateurs + - * / et entrée
    if (keyPress == "/" || keyPress == "*" || keyPress == "-" || keyPress == "+" || keyPress == "."){
        answer.textContent += keyPress;
    }
    //vérifier si ce n'est pas du texte
    if (!isNaN(keyPress)) {
        //buttons[keyPress].style.backgroundColor = "green";
        answer.textContent += keyPress;
    }
});