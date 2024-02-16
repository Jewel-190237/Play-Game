function playNow(){
    hideId('home');
    showId('playground');
    continueGame();
}

function hideId(showElement) {
    const hideContent = document.getElementById(showElement);
    hideContent.classList.add('hidden');
    //console.log(idContent.classList);
}

function showId(hideElement) {
    const showContent = document.getElementById(hideElement);
    showContent.classList.remove('hidden');
}
function continueGame(){
    getRandomAlphabet();

}
function getRandomAlphabet(){
    alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    
    const randomNumber = Math.random()*25;
    const number = Math.round(randomNumber);
    const exactAlphabet = alphabet[number];

    const showAlphabet = document.getElementById('current-alphabet');
    showAlphabet.innerText = exactAlphabet;

    showKeyboard(exactAlphabet);
    
    return exactAlphabet;
}

function showKeyboard(idContent){
    const element = document.getElementById(idContent);
    element.classList.add('bg-orange-600');

}