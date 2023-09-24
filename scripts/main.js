function init() {
    if (localStorage.getItem('sheet') !== null) {
        const terms = GetLocalStorage('sheet');
        generateSheet(terms);
    } else {
        generateHomeScreen();
    }
}

function generateSheet(shuffledTerms=null) {
    const ParentElement = document.querySelector('main');
    ParentElement.className = "";
    ParentElement.innerHTML = "";

    ParentElement.classList.add('bingo-sheet');

    if (shuffledTerms === null) {
        const terms = ['On my mission...', 'School is so hard...', '*Cries*', 'Silence longer than 2 minutes', 'Utah', 'testimony > 5 minutes', 'Irrelevant story', 'I feel prompted to...', 'Mentions dating', 'Says "ummm" frequently', 'Mentions major', 'Mentions CFM', '"I love you guys..."', 'Last minute testimony', 'Dash for 1st', 'Speaks mission language', 'Balding', 'Movie reference', 'General Conference', 'Immediate apology', 'Facial hair', 'Tells a joke', 'Trial/struggle', 'For those who don\'t know me'];

        const newTerms = shuffleArray(terms);

        shuffledTerms = newTerms;
        const today = new Date();

        SetLocalStorage('sheet', shuffledTerms);
        localStorage.setItem('date', today);
    }

    for (let i = 0; i < shuffledTerms.length; i++) {

        if (i == 12) {
            const freeSpace = document.createElement('div');
            freeSpace.classList.add("bingo-box");
            freeSpace.innerHTML = `<p class="bingo-term">"I know this church is true..."</p>`;
            
            freeSpace.addEventListener('click', function() {
                freeSpace.classList.toggle('selected');
            });
    
            ParentElement.appendChild(freeSpace);
        }
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

function generateHomeScreen() {
    const ParentElement = document.querySelector('main');
    ParentElement.className = "";
    ParentElement.innerHTML = "";

    ParentElement.classList.add('classic-view');
    
    const genDiv = document.createElement('div');
    genDiv.classList.add('generate-div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to YSA Bingo!';
    genDiv.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Click the button below to generate your sheet';
    genDiv.appendChild(p);

    const btn = document.createElement('button');
    btn.classList.add('generate-button');
    btn.textContent = 'Generate Sheet';

    btn.addEventListener('click', function () {
        generateSheet();
    });
    genDiv.appendChild(btn);

    ParentElement.appendChild(genDiv);

    return
}

function SetLocalStorage(key, value) {
    const jsonified = JSON.stringify(value);

    localStorage.setItem(key, jsonified);

    return
}

function GetLocalStorage(key) {
    const storageItem = localStorage.getItem(key);

    const value = JSON.parse(storageItem);

    return value
}

init();

