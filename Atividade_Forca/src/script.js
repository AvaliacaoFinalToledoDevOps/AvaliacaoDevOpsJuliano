
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    Frutas: [
        "Acerola",
        "Banana",
        "Pera",
        "Laranja",
        "Limao",
        "Melancia",
    ],
    Animais: ["Cachorro", "Rinoceronte", "Aguia", "Pantera", "Leao", "Zebra"],
    Paises: [
        "India",
        "Brasil",
        "Russia",
        "Japao",
        "Malasia",
        "Argentina",
    ],
};

let winCount = 0;
let count = 0;

let chosenWord = "";

const mostrarOpcoes = () => {
    optionsContainer.innerHTML += `<h3>Selecione uma das opções</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="gerarPalavra('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

const bloquear = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};

const gerarPalavra = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });

    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();

    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

    userInputSection.innerHTML = displayItem;
};

const iniciarJogo = () => {
    winCount = 0;
    count = 0;
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        button.onclick = function () {
            // button click event code here
        };
        letterContainer.append(button);
    }
    mostrarOpcoes();
    let canvasCriadorObject = canvasCriador();
    let iniciarDesenho = canvasCriadorObject.iniciarDesenho;
    iniciarDesenho();
};


const canvasCriador = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    const criarDesenho = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const cabeca = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const corpo = () => {
        criarDesenho(70, 40, 70, 80);
    };

    const bracoEsquerdo = () => {
        criarDesenho(70, 50, 50, 70);
    };

    const bracoDireito = () => {
        criarDesenho(70, 50, 90, 70);
    };

    const pernaEsquerda = () => {
        criarDesenho(70, 80, 50, 110);
    };

    const pernaDireita = () => {
        criarDesenho(70, 80, 90, 110);
    };

    const iniciarDesenho = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        criarDesenho(10, 130, 130, 130);
        criarDesenho(10, 10, 10, 131);
        criarDesenho(10, 10, 70, 10);
        criarDesenho(70, 10, 70, 20);
    };

    return { iniciarDesenho, cabeca, corpo, bracoEsquerdo, bracoDireito, pernaEsquerda, pernaDireita };
};

const desenharForca = (count) => {
    let { cabeca, corpo, bracoEsquerdo, bracoDireito, pernaEsquerda, pernaDireita } = canvasCriador();
    switch (count) {
        case 1:
            cabeca();
            break;
        case 2:
            corpo();
            break;
        case 3:
            bracoEsquerdo();
            break;
        case 4:
            bracoDireito();
            break;
        case 5:
            pernaEsquerda();
            break;
        case 6:
            pernaDireita();
            break;
        default:
            break;
    }
};

newGameButton.addEventListener("click", iniciarJogo);
window.onload = iniciarJogo;
