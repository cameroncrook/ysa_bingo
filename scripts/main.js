function init() {
    generateSheet();
}

function generateSheet() {
    const ParentElement = document.querySelector('main');

    ParentElement.classList.add('bingo-sheet');

    const terms = ['On my mission...', 'School is so hard...', '*Cries*', 'Silence longer than 2 minutes', 'Utah', 'testimony > 5 minutes', 'Irrelevant story', 'I feel prompted to...', 'Mentions dating', 'Says "ummm" frequently', 'Mentions major', 'Mentions CFM', '"I love you guys..."', 'Last minute testimony', 'Dash for 1st', 'Speaks mission language', 'Balding', 'Movie reference', 'General Conference', 'Immediate apology', 'Facial hair', 'Tells a joke', 'Trial/struggle', 'For those who don\'t know me', '"I know this church is true"']

    const shuffledTerms = shuffleArray(terms);

    for (let i = 0; i < shuffledTerms.length; i++) {

        const bingoBox = document.createElement('div');
        bingoBox.classList.add("bingo-box");
        bingoBox.innerHTML = `<p class="bingo-term">${shuffledTerms[i]}</p>`;

        bingoBox.addEventListener('click', function() {
            bingoBox.classList.toggle('selected');
        });

        ParentElement.appendChild(bingoBox);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }

    return array;
}

function setLocalStorage(key, value) {

}

function getLocalStorage(key) {

}

init();

