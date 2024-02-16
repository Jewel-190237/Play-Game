function playNow() {
    hideId('home');
    hideId('score-show')
    showId('playground');

    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);
    //removeBackgroundById('');
    continueGame();
}

function hideId(showElement) {
    const hideContent = document.getElementById(showElement);
    hideContent.classList.add('hidden');
}

function showId(hideElement) {
    const showContent = document.getElementById(hideElement);
    showContent.classList.remove('hidden');
}

function handleKeyboardButtonPress(event) {
    const pressAlphabet = event.key;

    const randomLetter = document.getElementById('current-alphabet')
    const currentAlphabet = randomLetter.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (pressAlphabet === expectedAlphabet) {

        const liveScore = document.getElementById('score');

        let score = getTextElementById('score');
        score = score + 1;
        liveScore.innerText = score;

        removeBackgroundById(pressAlphabet);
        continueGame();
    }


    else {
        const lifeText = document.getElementById('life');
        let life = getTextElementById('life');
        life--;
        lifeText.innerText = life;

        if (life < 0) {
            gameOver();
        }
    }

}

function getElementTextById(idElement){
    const element = document.getElementById(idElement);
    const text = element.innerText;
    return text;

}

function getTextElementById(idElement) {
    const element = document.getElementById(idElement);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(idContent, value) {
    const element = document.getElementById(idContent)
    element.innerText = value;

}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const exactAlphabet = alphabet[number];

    const showAlphabet = document.getElementById('current-alphabet');
    showAlphabet.innerText = exactAlphabet;

    showKeyboard(exactAlphabet);

}

function showKeyboard(idContent) {
    const element = document.getElementById(idContent);
    element.classList.add('bg-orange-600');
}

function removeBackgroundById(idElement) {
    const element = document.getElementById(idElement)
    element.classList.remove('bg-orange-600');
}

function gameOver() {
    hideId('playground');
    showId('score-show');

    //Show Final score
    const finalScore = getTextElementById('score');
    console.log(finalScore);
    setTextElementValueById('last-score', finalScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundById(currentAlphabet);
}
